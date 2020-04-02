# Fullstack Sample Reploy App :) 

## Installation and Upgrading

### macOS

```
brew install getreploy/reploy/reploy
```

Upgrade:
`brew upgrade getreploy/reploy/reploy`

## Getting Started

This repo has two reploy projects: a frontend react application in `/frontend`, and a backend go application in `/backend`. At the top level directory, there is a `.reployproject` file which describes the environment that will be run against.

1. Clone and step into the directory
```
git clone github.com/getreploy/fullstack-sample
cd fullstack-sample
```
2. Sign up for an account and authenticate.
```
reploy auth
```
3. Start the reploy watcher to watch for file changes in the given directory in a separate terminal window.
```
reploy watch
```

## Writing code!

As a reploy user, you can run any arbitrary linux command prefixed by reploy run (e.g. `reploy run <command>`). We've detailed the steps for getting started with both the frontend and backend apps below.

### Backend

Step into the `backend` folder and start go app:
```
cd backend
reploy run go run .
```

### Frontend

Install requirements in the `frontend` folder and start the react app
```
cd frontend
reploy run npm install
reploy run npm start
```
