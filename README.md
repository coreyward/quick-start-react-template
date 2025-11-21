# Vite + React + TypeScript Template

A minimal, production-ready template for building React applications with Vite, TypeScript, and modern tooling.

## Features

- ⚡️ **Vite** - Fast build tool with HMR
- ⚛️ **React 19** - Latest React with TypeScript
- 🔧 **SWC** - Fast TypeScript/JSX compilation
- 🧪 **Vitest + Testing Library** - Unit testing with React Testing Library
- 🎨 **Prettier** - Code formatting
- 🔍 **OxLint + ESLint** - Fast, comprehensive linting
  - OxLint handles performance-critical rules
  - ESLint handles React-specific and stylistic rules
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
- `pnpm lint` - Run OxLint and ESLint
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
├── eslint.config.js     # ESLint configuration
├── oxlintrc.json        # OxLint configuration
└── .prettierignore      # Prettier ignore patterns
```

## Linting Strategy

This template uses a dual-linting approach with strict type checking enabled by default:

1. **OxLint** runs first with type-aware checking and handles:
   - Correctness rules (syntax errors, common mistakes)
   - React rules (jsx-key, no-children-prop, etc.)
   - TypeScript rules (await-thenable, no-floating-promises, etc.)
   - Unicorn rules (modern JavaScript patterns)
   - Accessibility rules (jsx-a11y)

2. **ESLint** runs second with:
   - OxLint-handled rules disabled (via `eslint-plugin-oxlint`)
   - Strict type-aware TypeScript rules (`strictTypeChecked`)
   - Stylistic type-aware rules (`stylisticTypeChecked`)
   - React-specific rules (hooks, refresh)

This configuration provides comprehensive safety and consistency out of the box.
