# jjversion-action

jjversion-action is a composite GitHub action that uses the Go package [jjliggett/jjversion](https://github.com/jjliggett/jjversion) to calculate a version for a git repository and parse version attributes as GitHub Action outputs.

## Licensing

Licensing can be found at: [LICENSE.md](LICENSE.md).

The jjversion-action license applies to all parts of jjversion-action that are not externally maintained libraries and dependencies.

The primary dependency of jjversion-action is jjversion, located at <https://github.com/jjliggett/jjversion>. Its license and the licenses for its dependencies can be found in the jjversion repository. This action installs jjversion from the GitHub jjliggett/jjversion repository.

The node12 version parsing code portion of the action uses several dependencies which are compiled and distributed in the version-parsing/dist/index.js file. Licenses for the dependencies included can be found in the <https://github.com/jjliggett/jjversion-action/blob/root/version-parsing/dist/licenses.txt> file.

Two external GitHub actions are used within the composite jjversion GitHub Action. These are:

- <https://github.com/ChristopherHX/conditional/tree/3fce4b7a3171a839b482306f9fd3aba0c2112a24>
- <https://github.com/actions/setup-go> (conditional on input)

In addition, several GitHub actions are used within workflows for the repository:

- <https://github.com/actions/checkout>
- <https://github.com/actions/setup-go>

### VS Code Dev Container

VS Code Dev Containers is a development tool that utilizes a Docker container as a "full-featured development environment." Information regarding dev containers can be found at: <https://code.visualstudio.com/docs/remote/containers>.

This repository uses a dev container for development of the JavaScript version-parsing internal node12 JavaScript action.

The dev container is a debian container with node using library scripts and a Dockerfile template from <https://github.com/microsoft/vscode-dev-containers> It also installs jq, build-essential, and @vercel/ncc within the container.

The following extensions are included as part of the dev container:

- eamodio.gitlens

License information for the dev container can be found at the following links:

- <https://github.com/microsoft/vscode-dev-containers/blob/main/LICENSE>
- <https://github.com/microsoft/vscode-dev-containers/blob/main/NOTICE.txt>
- <https://github.com/nodejs/node/blob/master/LICENSE>
- <https://metadata.ftp-master.debian.org/changelogs//main/b/build-essential/build-essential_12.9_copyright>
- <https://github.com/stedolan/jq/blob/master/COPYING>
- <https://github.com/vercel/ncc/blob/main/LICENSE>
- <https://github.com/Axosoft/vscode-gitlens/blob/main/LICENSE>
