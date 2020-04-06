# Getting Started With Node Craft

Node CLI App with an interactive command prompt based shell. The following
commands below are to be run in the Terminal App for Mac OSX or Linux.

## Technology

- [Node.JS](https://nodejs.org/en/) | JavaScript runtime.
- [Mocha](https://mochajs.org/) | Feature-rich JavaScript test framework running
  on Node.js.
- [Chai](https://www.chaijs.com/) | BDD / TDD assertion library for node and the
  browser that can be delightfully paired with any javascript testing framework.

## Setting up

### Installation.

- Access project directory on your terminal.

      bin/setup

### Testing.

- Access project directory on your terminal.

      npm test

### Uninstall.

- Access project directory on your terminal.

      bin/uninstall

- Uninstall globally

      npm uninstall -g parking_lot

### Run Application

- Global

  - After you have installed globally, open up terminal and type.

        parking_lot

- Local

  - On project directory

        npm install
        node .
        exit (For exit project)

- Via File Input

  - On project directory

        bin/parking_lot file_inputs.txt

    OR

        parking_lot file_inputs.txt
