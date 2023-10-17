# GitHub Action To validate JSON file

GitHub Action to validate JSON file.

## Configuration

* Create `.github/workflows/github_action_json_lint.yaml` file with following contents:
```
name: Validate JSON

on:
  [commit]
jobs:
  github_action_json_lint:
    runs-on: ubuntu-latest
    steps:
    - name: Validate JSON
      uses: ilmartyrk/github-action-json-lint@12345a
      with:
        path-to-file: 'path/to/file.json'
```
* Push changes and deploy to verify configuration.

**NOTE:**

* `uses: ilmartyrk/github-action-json-lint`
   * `@12345a` is a version reference.

### More info

* https://github.com/features/actions
* https://help.github.com/en/actions/automating-your-workflow-with-github-actions