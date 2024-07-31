# Currency Converter App

The Currency Converter App is a simple application that allows you to convert currency from one to another. The app uses the API service (https://api.currencybeacon.com) to get the latest exchange rates. You can select the currency from the dropdown, input the amount to convert, and get the converted amount. The app also has a button to swap the currencies.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Get the latest exchange rates from the API service (https://api.currencybeacon.com)
- Convert currency from one to another
- Button to swap the currencies
- Formatted output with the converted amount
- Possibility to input the decimal amount
- Select the currency from the dropdown
- Input the amount to convert
- Get the converted amount
- Loading spinner while fetching the exchange rates
- Unit tests for App component
- JSDoc for the main components
- Redux for state management
- Redux Saga for side effects
- Material UI for styling
- TypeScript for type checking
- Eslint for linting
- Prettier for formatting
- Jest for testing

## Potential improvements

- Add more unit tests for the components and the sagas
- Add tests with mocking API calls
- Add more JSDoc for the components
- Add integration tests
- Add more features like real-time updating of the exchange rate for the selected currencies
- Add more styling to the components
- Add animations

## How to run the application

To run the application, you need to have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/en/download/

After you have installed Node.js, you can run the following commands in the terminal:

```sh
git clone
cd currency-converter-app
yarn install
yarn start
```

If you don't have yarn installed, visit https://yarnpkg.com/ and follow the instructions.

The application will open in the browser at http://localhost:3000/

## Configure application

To configure the application, you need to create a `.env.local` file in the root directory of the project and add the following environment variables:

```sh
REACT_APP_API_KEY=YOUR_API_KEY
```

App uses https://api.currencybeacon.com service to get the latest exchange rates. You need to sign up and get your API key from the website.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Additional Scripts

### `yarn lint`

Runs the linter to check for any linting errors in the codebase.

### `yarn lint:fix`

Runs the linter to check for any linting errors in the codebase and fixes them.

### `yarn format`

Runs the formatter to format the codebase.

## Structure

```sh
.
├── README.md
├── eslint.config.mjs
├── jest.config.js
├── jsdoc.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── actions
│   │   └── index.ts
│   ├── api
│   │   ├── api.ts
│   │   └── currencies.ts
│   ├── components
│   │   ├── Amount
│   │   │   ├── Amount.tsx
│   │   │   └── index.ts
│   │   ├── App
│   │   │   ├── App.tsx
│   │   │   ├── index.ts
│   │   │   └── styles.ts
│   │   ├── CurrencyConverter
│   │   │   ├── CurrencyConverter.tsx
│   │   │   └── index.ts
│   │   ├── CurrencySelector
│   │   │   ├── CurrencySelector.tsx
│   │   │   └── index.ts
│   │   ├── LoadingSpinner
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── index.ts
│   │   └── Output
│   │       ├── Output.tsx
│   │       └── index.ts
│   ├── constants
│   │   └── index.ts
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reducers
│   │   ├── currencies.ts
│   │   └── index.ts
│   ├── sagas
│   │   ├── currencies.ts
│   │   └── index.ts
│   ├── selectors
│   │   └── index.ts
│   ├── setupTests.ts
│   ├── store
│   │   └── index.ts
│   ├── tests
│   │   ├── App.test.tsx.bak
│   │   └── store.tsx
│   └── utils
│       └── index.ts
├── tsconfig.json
└── yarn.lock
```

## Environment

- node.js: 20.10.0+
- npm: 10.2.3+
- yarn: 1.22.19+
