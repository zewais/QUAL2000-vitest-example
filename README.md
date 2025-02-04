# Global setup for Vitest and React Test Library

This is a comprehensive guide to set up your project to test React components using Vitest and React Test Library.

## Install Vitest and React Test Library

```sh
npm install -D vitest @vitest/ui
npm install -D jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

## Add a test setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _src/setupTests.js_
2. add the below line of code to the file

```js
import "@testing-library/jest-dom";
```

## Add a vitest setup file

create _vitest.config.js_ file in the root folder and open it.
then add the following configuration commands below, then save.

```js
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests/js"],
  },
});
```

## Add test script to package.json `test` object

Open package.json and add the below command inside the scripts object.

```json
    "test": "vitest"
```

Now you are ready to start testing your application!
