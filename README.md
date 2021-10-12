# jjversion-action

jjversion-action is a composite GitHub action that uses the Go package [jjliggett/jjversion](https://github.com/jjliggett/jjversion) to calculate a version for a git repository and parse version attributes as GitHub Action outputs.

## Usage

For this action to work properly, you must create a versioning.yaml file in your repository and checkout your repository in your workflow with ```fetch-depth: 0``` to fetch all history for all tags and branches. Configuration information for the versioning.yaml file can be found in the <https://github.com/jjliggett/jjversion> repository.

### Inputs

The action accepts the following input:

```yaml
  skip-go-installation:
    description: "If set to true, then the action uses pre-installed Go"
    default: "false"
    required: false
```

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
        uses: actions/checkout@v2
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

The primary dependency of jjversion-action is jjversion, located at <https://github.com/jjliggett/jjversion>. Its license and the licenses for its dependencies can be found in the jjversion repository. This action installs jjversion from the GitHub jjliggett/jjversion repository.

Another core dependency of jjversion-action is jjversion-parsing-action, located at <https://github.com/jjliggett/jjversion-parsing-action>. This is a JavaScript action which parses the version JSON outputed by jjversion. Its license and the license for its dependencies can be found in the jjversion-parsing-action repository.

Two external GitHub actions are used within the composite jjversion GitHub Action. These are:

- <https://github.com/ChristopherHX/conditional/tree/3fce4b7a3171a839b482306f9fd3aba0c2112a24>
- <https://github.com/actions/setup-go> (conditional on input)

In addition, several GitHub actions are used within workflows for the repository:

- <https://github.com/actions/checkout>
- <https://github.com/actions/setup-go>
