# Vite + React + TypeScript Template

A minimal, production-ready template for building React applications with Vite,
TypeScript, and modern tooling.

This is especially helpful to create quick one-off apps with an AI agent. The
built-in tooling keeps them from using outdated versions or from writing sloppy
code with no checks.

## Stack

- ⚡️ Vite + React 19 + TypeScript
- 🧪 Vitest + Testing Library
- 🔍 OxLint (type-aware) + Prettier
- 📦 pnpm

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (includes type checking)
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests once
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm lint` - Run OxLint (type-aware)
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Project Structure

```
├── src/
│   ├── test/
│   │   └── setup.ts     # Test setup (jest-dom matchers)
│   ├── App.tsx          # Main app component
│   ├── App.test.tsx     # App component tests
│   └── main.tsx         # App entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── vitest.config.ts     # Vitest configuration
├── tsconfig.json        # TypeScript config (references)
├── tsconfig.app.json    # TypeScript config for app code
├── tsconfig.node.json   # TypeScript config for Node.js tooling
├── oxlint.config.ts     # OxLint configuration
└── .prettierignore      # Prettier ignore patterns
```
