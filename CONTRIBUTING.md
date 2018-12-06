# Contributing

Contributions, issues, and feature requests are all welcome! PRs should follow a basic format, as described below, to ensure a smooth process that respects everyone's time.

**Everyone is a beginner at some point!** If you don't understand any of the guidelines described below, reach out to a developer or open a GitHub issue.

### Feature Requests & Bug Reports

> **Note:** Dragon Warrior Monsters 2 support is not on the roadmap for 1.0.0, but data contributions are welcome.

Open a GitHub issue and fill out the appropriate template, then sit back and wait for feedback!

### Your First Contribution

> Working on your first Pull Request? You can learn how from this series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

Start by taking a look at our issues. **Beginner issues** should only require a few lines of code, while **Help Wanted** issues are more complicated. If none of those strike your fancy, here are some extra examples:

-   Improving documentation, whether through code comments or markdown pages
-   Squashing, searching for, or documenting bugs
-   Fixing bad data like incorrect monster stats
-   Adding new data like detailed skills or locations

## Guidelines

### General Guidelines

-   All PRs should be submitted against the **develop branch**.
-   Branches should have a topical name
-   ~~New features must have tests~~ v0.0.1 is the wild west
-   All tests must pass before the PR is approved
-   New features must have a related GitHub issue for transparent discussion and feedback

### Commit messages

Commit messages should follow [conventional commit](https://www.conventionalcommits.org/) standards so changelogs can be automatically generated.

`yarn commit` will provide an interactive CLI for proper commit messages. `yarn commit --retry` will retry your most recent failed commit.

`git rebase` can be used to adjust your commits if they don't alraedy match the standards.

```shell
# Bugfix
fix: minor typos in code

# Documentation
docs: correct spelling of CHANGELOG

# Unscoped feature
feat: added skills data

# Scoped feature
feat(skills): added skills data
```
