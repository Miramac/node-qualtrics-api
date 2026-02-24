# CLAUDE.md — node-qualtrics-api

This file documents the codebase structure, development workflows, and conventions for AI assistants working in this repository.

## Project Overview

`qualtrics-api` (npm package name) is a Node.js wrapper around the [Qualtrics REST API](https://api.qualtrics.com/api-reference/). It is written in TypeScript and compiled to CommonJS for distribution. Version: **2.5.0**.

The library provides typed, promise-based access to Qualtrics resources: users, groups, IQ Directory contacts, mailing lists, surveys, distributions, and response exports.

---

## Repository Structure

```
node-qualtrics-api/
├── lib/                        # TypeScript source files
│   ├── interfaces/
│   │   └── options.ts          # Shared interfaces (QualtricsOptions, FetchOptions)
│   ├── fetch.ts                # Low-level HTTP client wrapping node-fetch
│   ├── qualtrics.ts            # Main entry-point class (default export)
│   ├── user.ts                 # User resource class
│   ├── group.ts                # Group resource class
│   ├── iq-directory.ts         # IQ Directory resource class
│   ├── mailing-list.ts         # Mailing list resource class
│   ├── survey.ts               # Survey resource class (includes response export)
│   └── distribution.ts        # Distribution resource class
├── test/
│   ├── tap.basics.js           # Integration tests: whoami, users, groups
│   ├── tap.group.js            # Integration tests: group CRUD + membership
│   └── tap.list.js             # Integration tests: mailing list contacts
├── docs/                       # Auto-generated TypeDoc markdown docs
├── dist/                       # Compiled JS + .d.ts output (gitignored, npm-published)
├── index.js                    # Package entry: re-exports dist/qualtrics.default
├── tsconfig.json               # TypeScript compiler config (target ES2018, commonjs, strict)
├── package.json
├── .env.sample                 # Template for local environment variables
└── .gitignore                  # Excludes dist/, node_modules/, .env
```

---

## Architecture

### Class Hierarchy

```
Qualtrics (qualtrics.ts)          ← main class, instantiated by consumers
  ├── Fetch (fetch.ts)            ← HTTP layer, holds baseUrl + API token
  ├── User (user.ts)
  ├── Group (group.ts)
  ├── IQDirectory (iq-directory.ts)
  ├── MailingList (mailing-list.ts)
  ├── Survey (survey.ts)
  │     └── Distribution (distribution.ts)
  └── (deprecated top-level methods that delegate to the above)
```

Each resource class:
- Receives `QualtricsOptions` (or `FetchOptions`) in its constructor.
- Instantiates its own `Fetch` instance.
- Returns raw Qualtrics API JSON (`Promise<any>`) unless noted otherwise.

### Fetch Client (`lib/fetch.ts`)

All HTTP methods (`get`, `getRaw`, `post`, `put`, `delete`) follow the same pattern:
- Prepend `baseUrl` if the path is not an absolute URL.
- Send `Content-Type: application/json` and `x-api-token` headers.
- On a non-ok response, reject with the parsed JSON error body.
- `getRaw` returns the raw `node-fetch` `Response` object (used for streaming file downloads).

### Pagination

Resources that can return large result sets implement their own pagination loops using either `nextPage` or `skipToken` cursor patterns (matching the Qualtrics API). See `IQDirectory.getAllContacts`, `Group.getAll`, `User.getAll`, and `MailingList.getAllContacts`.

### Deprecated Methods

`Qualtrics` (the main class) has many deprecated top-level methods (e.g., `getUsers`, `getGroups`, `getDirectoryContacts`). These are thin wrappers that delegate to the resource classes. Prefer the resource-class style for new code:

```js
// Preferred (resource class style)
qualtrics.user('UR_xxx').get()
qualtrics.group('GR_xxx').addMember('UR_xxx')

// Deprecated (top-level style)
qualtrics.getUser('UR_xxx')
qualtrics.addGroupMember('GR_xxx', 'UR_xxx')
```

---

## Configuration Interface

```ts
interface QualtricsOptions {
  apiToken: string        // Qualtrics API token (x-api-token header)
  baseUrl: string         // e.g. "https://eu.qualtrics.com/API/v3/"
  defaultDirectory: string // IQ Directory ID, e.g. "POOL_xxxxxxxx"
  agent: any              // Optional: custom https.Agent (for proxy/TLS config)
}
```

The `defaultDirectory` value is used as a fallback in `IQDirectory`, `MailingList`, `Survey`, and `Distribution` when no directory ID is explicitly passed.

---

## Development Workflow

### Prerequisites

- Node.js (v14+)
- npm

### Setup

```bash
npm install
cp .env.sample .env
# Edit .env and fill in real credentials for integration tests
```

### Build

TypeScript is compiled to `./dist/` (ES2018, CommonJS modules, with `.d.ts` declarations):

```bash
npm run build        # one-off compile
npm run dev          # watch mode
```

### Generate Docs

API docs are generated as Markdown into `./docs/` via TypeDoc:

```bash
npm run typedoc-md
```

The `prepare` script runs both `build` and `typedoc-md` automatically on `npm publish` / `npm pack`.

### Run Tests

Tests use the [`tap`](https://node-tap.org/) framework and run against the **live Qualtrics API**. They are integration tests, not unit tests.

```bash
npm test
```

Required `.env` variables for tests:

| Variable              | Description                             |
|-----------------------|-----------------------------------------|
| `API_TOKEN`           | Qualtrics API token                     |
| `BASE_URL`            | API base URL (e.g. `https://eu.qualtrics.com/API/v3/`) |
| `DEFAULT_DIRECTORY`   | IQ Directory ID (`POOL_xxxxxxxx`)       |
| `TEST_GROUP_ID`       | Group ID for group tests                |
| `TEST_USER_ID`        | User ID for group membership tests      |
| `TEST_MAILINGLIST_ID` | Mailing list ID for list contact tests  |

Tests **cannot be run without valid Qualtrics credentials**. There is no mock/stub layer.

---

## Key Conventions

### TypeScript

- **Strict mode** is enabled (`"strict": true` in `tsconfig.json`).
- Target is `ES2018` / CommonJS output.
- Declaration files (`.d.ts`) are generated alongside compiled JS.
- `skipLibCheck: true` — type errors in third-party `.d.ts` files are ignored.

### Code Style

- No linter config is present (no ESLint/Prettier). Follow existing style: 2-space indentation, single quotes for strings, no trailing semicolons in most places (mixed in existing code).
- Resource classes use `async/await` for multi-step operations and return bare `Promise` chains for single-step operations.
- Method comments use JSDoc style with `@param`, `@returns`, and `@url` tags.

### Module Export

The package exports only the compiled JS from `dist/`. The entry point `index.js` does:

```js
module.exports = require('./dist/qualtrics').default
```

TypeScript consumers can import the named class. JavaScript consumers get the default export directly:

```js
// JS
const Qualtrics = require('qualtrics-api')

// TS
import Qualtrics from 'qualtrics-api'
// or
import { Qualtrics } from 'qualtrics-api'   // via re-export in dist
```

### Error Handling

All HTTP errors are rejected promises containing the parsed Qualtrics JSON error body. Callers should use `.catch()` or `try/catch` with `await`.

---

## Adding New Features

When adding a new Qualtrics resource:

1. Create `lib/<resource-name>.ts` exporting a class that:
   - Accepts `QualtricsOptions` and stores a `Fetch` instance.
   - Exposes promise-returning methods.
2. Add a factory method on the `Qualtrics` class (e.g. `qualtrics.resource(id)`).
3. Rebuild docs: `npm run typedoc-md`.
4. Add integration tests in `test/tap.<resource>.js`.

When extending existing classes, keep the pattern consistent with existing resource methods. Avoid introducing breaking changes to method signatures — add new optional parameters or new methods instead.

---

## Files Not to Edit Directly

- `dist/` — generated by `tsc`, do not hand-edit.
- `docs/` — generated by `typedoc-plugin-markdown`, do not hand-edit.
- `package-lock.json` — managed by npm.
