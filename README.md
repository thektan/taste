# Taste

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

_Under development_

[Here's what's planned for 1.0](https://github.com/thektan/taste/milestone/2)

## Development

### Environment

* Created on [create-react-app](https://github.com/facebook/create-react-app)
* Formatter: [Prettier](https://prettier.io/)
* Viewing/testing components: [Storybook](https://storybook.js.org/)

### Deploying

On first deploy, install dependencies

```
yarn
```

### To start the app, watch for css changes, and start storybook

```
yarn start-dev
```

### To deploy in separate panes

To start the app, go into the `node` directory and run:

```
yarn start
```

To watch for css changes, open a new terminal and run:

```
yarn watch-css
```

Prettier formatting is automatically run on every commit.

To start storybook to view and test components:

```
yarn run storybook
```
