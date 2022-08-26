oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g run-scripts
$ run-scripts COMMAND
running command...
$ run-scripts (--version)
run-scripts/0.0.0 darwin-x64 node-v14.19.0
$ run-scripts --help [COMMAND]
USAGE
  $ run-scripts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`run-scripts hello PERSON`](#run-scripts-hello-person)
* [`run-scripts hello world`](#run-scripts-hello-world)
* [`run-scripts help [COMMAND]`](#run-scripts-help-command)
* [`run-scripts plugins`](#run-scripts-plugins)
* [`run-scripts plugins:install PLUGIN...`](#run-scripts-pluginsinstall-plugin)
* [`run-scripts plugins:inspect PLUGIN...`](#run-scripts-pluginsinspect-plugin)
* [`run-scripts plugins:install PLUGIN...`](#run-scripts-pluginsinstall-plugin-1)
* [`run-scripts plugins:link PLUGIN`](#run-scripts-pluginslink-plugin)
* [`run-scripts plugins:uninstall PLUGIN...`](#run-scripts-pluginsuninstall-plugin)
* [`run-scripts plugins:uninstall PLUGIN...`](#run-scripts-pluginsuninstall-plugin-1)
* [`run-scripts plugins:uninstall PLUGIN...`](#run-scripts-pluginsuninstall-plugin-2)
* [`run-scripts plugins update`](#run-scripts-plugins-update)

## `run-scripts hello PERSON`

Say hello

```
USAGE
  $ run-scripts hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/gaorun/run-scripts.git/run-scripts/blob/v0.0.0/dist/commands/hello/index.ts)_

## `run-scripts hello world`

Say hello world

```
USAGE
  $ run-scripts hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `run-scripts help [COMMAND]`

Display help for run-scripts.

```
USAGE
  $ run-scripts help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for run-scripts.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `run-scripts plugins`

List installed plugins.

```
USAGE
  $ run-scripts plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ run-scripts plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `run-scripts plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ run-scripts plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ run-scripts plugins add

EXAMPLES
  $ run-scripts plugins:install myplugin 

  $ run-scripts plugins:install https://github.com/someuser/someplugin

  $ run-scripts plugins:install someuser/someplugin
```

## `run-scripts plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ run-scripts plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ run-scripts plugins:inspect myplugin
```

## `run-scripts plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ run-scripts plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ run-scripts plugins add

EXAMPLES
  $ run-scripts plugins:install myplugin 

  $ run-scripts plugins:install https://github.com/someuser/someplugin

  $ run-scripts plugins:install someuser/someplugin
```

## `run-scripts plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ run-scripts plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ run-scripts plugins:link myplugin
```

## `run-scripts plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ run-scripts plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ run-scripts plugins unlink
  $ run-scripts plugins remove
```

## `run-scripts plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ run-scripts plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ run-scripts plugins unlink
  $ run-scripts plugins remove
```

## `run-scripts plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ run-scripts plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ run-scripts plugins unlink
  $ run-scripts plugins remove
```

## `run-scripts plugins update`

Update installed plugins.

```
USAGE
  $ run-scripts plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
