import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["react", "unicorn", "typescript", "oxc", "jsx-a11y"],
  categories: {
    correctness: "deny",
    suspicious: "warn",
    perf: "warn",
    pedantic: "warn",
  },
  rules: {
    curly: "error",
    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    // Trailing comments on a line of code are idiomatic, not a defect.
    "no-inline-comments": "allow",
    "react/react-in-jsx-scope": "allow",
    "typescript/no-explicit-any": "error",
    "typescript/no-unnecessary-condition": "error",
  },
  overrides: [
    {
      files: ["**/*.test.{ts,tsx}"],
      rules: {
        // Testing Library matchers take plain regexes; the `u` flag adds nothing.
        "require-unicode-regexp": "allow",
      },
    },
  ],
});
