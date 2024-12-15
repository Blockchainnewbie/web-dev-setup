module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Code style changes (formatting, etc)
        'refactor', // Code refactoring
        'perf', // Performance improvements
        'test', // Adding tests
        'chore', // Maintenance tasks
        'ci', // CI/CD changes
        'revert', // Revert changes
      ],
    ],
    'subject-case': [0],
    'subject-full-stop': [0],
  },
};
