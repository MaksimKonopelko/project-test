# React Boilerplate

### Environment
Application is based on Create React App and has all its features. Webpack configuration is overrided with `config-overrides.js` file and you can change it as you want. At the moment it used for implementing path aliases for avoiding long relative imports (`@/` refers to `./src/` folder). ESLint based on "standard" and "standard-react" configurations with some redefinings (more details you can find in `.eslintrc` file).

### Installation
The installation process should be done with `yarn install`.

### Running
Application starts with `yarn start` on port 3000 that could be redefined with environment variable PORT. Browser auto-start disabled but you can enable it in `.env` file, please pay attention on `BROWSER=none`. If you remove this line application open browser window automatically.

### The initial application based on create-react-app and includes next libraries
- react;
- react-dom;
- react-redux;
- react-router-dom;
- redux;
- redux-logger (only in dev environment);
- redux-saga;
- styled-components.

### Dev dependencies
- eslint-config-standard;
- eslint-config-standard-react;
- eslint-plugin-node;
- eslint-plugin-prettier;
- eslint-plugin-promise;
- eslint-plugin-standard;
- jest-image-snapshot;
- jsdom-screenshot;
- jest-transform-file;
- jest-transform-css;
- react-app-rewired;
- react-hot-loader;
- stylelint-config-recommended;
- stylelint-config-styled-components;
- stylelint-processor-styled-components;

# Recomendations

### Component structure
- `component.jsx` - base component;
- `container.js` - contains `mapStateToProps`, `mapDispatchToProps`, `connect` and etc of HOC stuff;
- `styles.js` - not common and isolated styles (styled-components);
- `component.test.js` - unit tests;
- `index.js` - has default export only (by default it's container, if container does not implemented it should export component).

### Common styles (styled-components)
It should be located in `components` folder according existing tree structure.

### Global styles and theme
Global styles located in `src/theme/GlobalStyle.js` file and theme in `src/theme/index.js`. The theme provides sizing and color constants that should be used in whole application. Please do not hardcode units and colors directly in styled-components files, it should be always placed in theme.
