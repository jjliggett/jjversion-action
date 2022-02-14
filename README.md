# jjversion-action

jjversion-action is a composite GitHub action that uses the Go package [jjliggett/jjversion](https://github.com/jjliggett/jjversion) to calculate a version for a git repository and parse version attributes as GitHub Action outputs.

## Usage

For this action to work properly, you must create a versioning.yaml file in your repository and checkout your repository in your workflow with ```fetch-depth: 0``` to fetch all history for all tags and branches. Configuration information for the versioning.yaml file can be found in the <https://github.com/jjliggett/jjversion> repository.

### Outputs

The action creates the following outputs:

- major
- minor
- patch
- majorMinorPatch
- sha
- shortSha

### Example Usage

An example usage can be seen below:

```yaml
    steps:
      - name: Checkout
        uses: actions/checkout@230611dbd0eb52da1e1f4f7bc8bb0c3a339fc8b7
        with:
          fetch-depth: 0
      - name: Get version
        id: jjversion
        uses: jjliggett/jjversion-action@620360b53e852c7316cbf9e233ea2a5de4f39f40
      - name: Display jjversion outputs
        run: |
          echo "Major: ${{ steps.jjversion.outputs.major }}"
          echo "Minor: ${{ steps.jjversion.outputs.minor }}"
          echo "Patch: ${{ steps.jjversion.outputs.patch }}"
          echo "MajorMinorPatch: ${{ steps.jjversion.outputs.majorMinorPatch }}"
          echo "Sha: ${{ steps.jjversion.outputs.sha }}"
          echo "ShortSha: ${{ steps.jjversion.outputs.shortSha }}"
```

## Licensing

Licensing can be found at: [LICENSE.md](LICENSE.md).

The jjversion-action license applies to all parts of jjversion-action that are not externally maintained libraries and dependencies.

The primary dependency of jjversion-action is jjversion-gha-output, located at <https://github.com/jjliggett/jjversion-gha-output>. Its license can be found in that repository. This action downloads a GitHub Release executable binary from the jjliggett/jjversion-gha-output repository and executes it.

Another core dependency of jjversion-action is jjversion, which is a dependency of jjversion-gha-output. This is located at <https://github.com/jjliggett/jjversion>. Its license and the licenses for its dependencies can be found in the jjversion repository.

An external GitHub action is used within the composite jjversion GitHub Action. This is:

- <https://github.com/actions/setup-go> (conditional on input)

In addition, several GitHub actions are used within workflows for the repository:

- <https://github.com/actions/checkout>
- <https://github.com/actions/setup-go>
