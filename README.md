# Fullstack Sample Reploy App :) 

## Installation and Upgrading

### macOS

Install:
`cd /usr/local/bin && { curl -o reploy cli.getreploy.com/reploy-latest ; chmod +x reploy; cd -; }`

Upgrade:
`reploy update`

## Usage

This repo has two reploy projects: a frontend react application in `/frontend`, and a backend flask application in `/backend`. In each of these directories, there is a `.reployproject` file which describes the environment that will be run against.

To run any arbitrary command in each of these projects, cd into the directory, and type `reploy run <command>`. That's it!
