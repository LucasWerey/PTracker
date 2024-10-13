module.exports = {
  types: [
    { value: ":sparkles: feat", name: "✨ feat:\tAdding a new feature" },
    { value: ":bug: fix", name: "🐛 fix:\tFixing a bug" },
    { value: ":memo: docs", name: "📝 docs:\tAdd or update documentation" },
    {
      value: ":lipstick: style",
      name: "💄 style:\tAdd or update styles, UI, or UX",
    },
    {
      value: ":recycle: refactor",
      name: "♻️ refactor:\tCode change that neither fixes a bug nor adds a feature",
    },
    {
      value: ":zap: perf",
      name: "⚡️ perf:\tCode change that improves performance",
    },
    {
      value: ":white_check_mark: test",
      name: "✅ test:\tAdding or updating tests",
    },
    {
      value: ":truck: chore",
      name: "🚚 chore:\tBuild process or auxiliary tools changes (e.g., documentation, tooling)",
    },
    {
      value: ":rewind: revert",
      name: "⏪️ revert:\tRevert to a previous commit",
    },
    { value: ":construction: wip", name: "🚧 wip:\tWork in progress" },
    {
      value: ":construction_worker: build",
      name: "👷 build:\tChanges related to build system or dependencies (e.g., npm, Cargo)",
    },
    {
      value: ":green_heart: ci",
      name: "💚 ci:\tContinuous integration and automation updates (e.g., GitHub Actions, workflows)",
    },
  ],

  scopes: [
    { name: "ui" },
    { name: "backend" },
    { name: "tauri" },
    { name: "security" },
    { name: "deps" },
    { name: "platform" },
    { name: "planner" },
    { name: "settings" },
  ],

  scopeOverrides: {
    fix: [{ name: "merge" }, { name: "hotfix" }, { name: "lint" }],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["body", "footer"],
  subjectLimit: 100,
};
