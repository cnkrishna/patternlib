# Single File Upload


This module provides a foundational set of [React](http://facebook.github.io/react) components.

## Usage

This project supports [Node v5+](https://nodejs.org) and npm 3+ installed in your development toolchain.

Install and save in your package.json:

npm install ______________________ --save

### External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component. They are npm-installable or 
available from a third-party [CDN](https://cdnjs.com/libraries/react/).

This component targets the styling in the [Pearson Elements SDK](https://www.npmjs.com/package/pearson-elements).

## Contributing

### Initial Machine Setup

1. Install [Node 5.10.0 or greater](https://nodejs.org) - Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
2. On a Mac? You're all set. If you're on Windows, complete the steps for your OS below.  

**On Windows:**

1. Install [Python 2.7](https://www.python.org/downloads/). Some node modules may rely on node-gyp, which requires Python on Windows.

**On Chrome browser:**

Optionally, install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

### Quick Start

After cloning the repository:

    npm install
    npm run dev
    
Navigate to **http://localhost:9080**, where the spawned Node server hosts a webpack-generated SPA using 
React Router for defining how to render the components.

As you save changes to the source, the changes are automatically reloaded in the browser.

### Build

Build the bundle(s) manually at any time, and minify all JavaScript for production:

npm run build

### Test

The project is wired to unit test with the Mocha framework, "expect" assertion library, and expect-jsx to turn React 
elements into formatted strings.

    npm run test

## Documentation Site


## Guidelines

All submissions must be via pull request and approved before the pearson-design-accelerator@pearson.com team will merge 
and allow it to enter the release process. All submissions must pass this project's linting, test with 100% code coverage, 
and be compatible with the version(s) of React approved for the Pearson User Experience Platform.

## License

Copyright 2015 Pearson Education. This software is published under the [MIT](LICENSE) license.
