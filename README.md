# Vite + React + TypeScript Template

A minimal, production-ready template for building React applications with Vite, TypeScript, and modern tooling.

## Features

- ⚡️ **Vite** - Fast build tool with HMR
- ⚛️ **React 19** - Latest React with TypeScript
- 🧪 **Vitest + Testing Library** - Unit testing with React Testing Library
- 🎨 **Prettier** - Code formatting
- 🔍 **OxLint** - Fast, comprehensive type-aware linting
- 📦 **pnpm** - Fast, disk-efficient package manager

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

## Linting Strategy

OxLint is the only linter. It is configured in `oxlint.config.ts` (a typed config, via
OxLint's `defineConfig`) and runs with type-aware checking (`--type-aware`, backed by
`oxlint-tsgolint`) at the `correctness`, `suspicious`, `perf`, and `pedantic` levels:

- Correctness rules (syntax errors, common mistakes)
- Type-aware TypeScript rules (`await-thenable`, `no-floating-promises`,
  `no-unnecessary-condition`, `no-explicit-any`, etc.)
- React rules, including hooks (`rules-of-hooks`, `exhaustive-deps`)
- Unicorn rules (modern JavaScript patterns)
- Accessibility rules (jsx-a11y)

This covers the `strictTypeChecked` and `stylisticTypeChecked` rule sets that
`typescript-eslint` previously provided, in a single fast pass with no ESLint runtime.

One rule is not carried over: `eslint-plugin-react-refresh`'s `only-export-components`,
which warns when a module exports both components and non-components. OxLint has no
equivalent; Fast Refresh will fall back to a full reload in that case.
