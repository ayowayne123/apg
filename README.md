### APG SAAS
### Overview

This project is a monorepo managed with:

- Node.js
- pnpm (package manager)
- Turborepo (task runner)
- Multiple apps inside the apps/ directory
- Shared packages inside the packages/ directory

## Requirements

Make sure the following are installed before running the project:

**1. Node.js**

Recommended version:
```
Node.js 20.x
```

Check your version:
```
node -v
```

If using nvm:
```
nvm use 20.9.0
```

**2. pnpm**

pnpm is required (this project does not use npm or yarn).

Install pnpm globally after selecting the correct Node version:
```
npm install -g pnpm
```

Verify:
```
pnpm -v
```
## Install Dependencies (Required)

Run this once, from the root of the monorepo:
```
pnpm install
```

This installs:

- All app dependencies
- All shared packages
- Links workspace packages correctly

## How to Run the Monorepo (All Apps)

To start all apps in development mode:
```
pnpm dev
```

## Build the Monorepo

To build all apps:
```
pnpm build
```

or:
```
pnpm turbo build
```

## Recommended Workflow
```
nvm use 20.9.0
pnpm install
pnpm dev
```
