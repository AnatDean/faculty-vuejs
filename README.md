# Faculty Viewer

This is a VueJS project to display faculty information from the randomuser API.

## Prerequistes

- Node JS


## Routes

- Home
- /:page

Both routes will provide a list of faculty, home will automatically request the first page of staff data.

## Project Setup

To install dependencies run the following command

```sh
npm install
```

### Compile and Hot-Reload for Development

To get up and running locally run the following command and open the localhost url provided in the terminal, likely `http://127.0.0.1:5173/`

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

Some sample tests have been written for external api requests and for the major component of this project (`UserList`). To run tests ensure you have installed node modules (see above) and then run the following script.

```sh
npm run test:unit
```

Due to time constraints api requests have not been mocked and so make real api calls.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
