# jjversion-action

jjversion-action is a composite GitHub action that uses the Go package [jjliggett/jjversion](https://github.com/jjliggett/jjversion) to calculate a version for a git repository and parse version attributes as GitHub Action outputs.

The action downloads the [jjliggett/jjversion-gha-output](https://github.com/jjliggett/jjversion-gha-output) executable and runs the executable. The executable extends the `jjversion` package, saving version information in GitHub step outputs.

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
        uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1
        with:
          fetch-depth: 0
      - name: Get version
        id: jjversion
        uses: jjliggett/jjversion-action@d985078849e10d73a55b8c7b0aa713349a03c156 # v0.6.10
      - name: Display jjversion outputs
        run: |
          echo "Major: ${{ steps.jjversion.outputs.major }}"
          echo "Minor: ${{ steps.jjversion.outputs.minor }}"
          echo "Patch: ${{ steps.jjversion.outputs.patch }}"
          echo "MajorMinorPatch: ${{ steps.jjversion.outputs.majorMinorPatch }}"
          echo "Sha: ${{ steps.jjversion.outputs.sha }}"
          echo "ShortSha: ${{ steps.jjversion.outputs.shortSha }}"
```

An optional parameter is available to specify the `jjversion-gha-output` executable version and override the default configured within the action source code - `version`. This can enable you to use a more updated version of the executable before this action is updated:

```yaml
    steps:
      - name: Checkout
        uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1
        with:
          fetch-depth: 0
      - name: Get version
        id: jjversion
        uses: jjliggett/jjversion-action@d985078849e10d73a55b8c7b0aa713349a03c156 # v0.6.10
        with:
          version: v0.3.37
      - name: Display jjversion outputs
        run: |
          echo "Major: ${{ steps.jjversion.outputs.major }}"
          echo "Minor: ${{ steps.jjversion.outputs.minor }}"
          echo "Patch: ${{ steps.jjversion.outputs.patch }}"
          echo "MajorMinorPatch: ${{ steps.jjversion.outputs.majorMinorPatch }}"
          echo "Sha: ${{ steps.jjversion.outputs.sha }}"
          echo "ShortSha: ${{ steps.jjversion.outputs.shortSha }}"
```

You can see the `jjversion-gha-output` releases and changelog here: <https://github.com/jjliggett/jjversion-gha-output/releases/>

## Licensing

Licensing can be found at: [LICENSE.md](LICENSE.md).

The jjversion-action license applies to all parts of jjversion-action that are not externally maintained libraries and dependencies.

The primary dependency of jjversion-action is jjversion-gha-output, located at <https://github.com/jjliggett/jjversion-gha-output>. Its license can be found in that repository. This action downloads a GitHub Release executable binary from the jjliggett/jjversion-gha-output repository and executes it.

Another core dependency of jjversion-action is jjversion, which is a dependency of jjversion-gha-output. This is located at <https://github.com/jjliggett/jjversion>. Its license and the licenses for its dependencies can be found in the jjversion repository.

In addition, a GitHub action is used within workflows for the repository:

- <https://github.com/actions/checkout>
