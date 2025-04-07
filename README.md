# ShoppingApp

This project is a mobile automation framework designed to execute end-to-end tests on an Android and iOS shopping app. The application files for both operating systems are included in the repository.

## Tecnologies:
- Appium
- WebdriverIO with @wdio/appium-service
- Typescript
- POM
- Allure report

## Automated tests:
- Add More Than 1 Product to Cart.
- Remove Product From Cart.
- Filter Products by Price and Name.
- Checkout and Validate Order created.

## Project structure:
- wdio.conf.ts : contains the WebdriverIO configuration.
- apps: Contains the app files for android and iOS OS.
- config: Contains the files with the capabilities needed for android and iOS.
- test: Includes the POM, data, helpest and tests.

## How to run tests:
- Clone the repo
- Install dependencies: npm install, npx appium
- Make sure an emulator or real device is running. Update the capabilities file (android.capabilities.ts or ios.capabilities.ts) accordingly.
- run the automation tests with the next command according to the platform of the device: PLATFORM=android npx wdio run wdio.conf.ts or PLATFORM=ios npx wdio run wdio.conf.ts.
- Generate and open the report with the command npx allure generate allure-results --clean && npx allure open