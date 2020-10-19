# Postscript App

Based on feedback from the last round, effort was made to write readable code that is logically abstracted and easy for another developer to edit. That feedback is included below, along with the steps taken to mitigate each concern.
Adequate unit test coverage is provided using React-Testing-Library and follows the following guidance from its [creator](https://twitter.com/kentcdodds/status/977018512689455106): "The more your tests resemble the way your software is used, the more confidence they can give you."
Integration tests could be accomplished using [Cypress](https://www.cypress.io).

- _incomplete requirements (preview / view / image etc.)_
  - A user can view a list of `Sent` and `Preview` campaigns [X]
  - A user can view information about a `Sent` campaign including performance stats [X]
  - A user can edit a `Preview` campaign [X]
  - A user can create a new campaign [X]
  - In new and edited campaigns, a user can...
    - view a live preview of the campaign [X]
    - replace parts of the message with tags [X]
    - select a target segment [X]
    - add a media link [X]
- _minimal test coverage_
  - Test files written for every major UI element, testing functionality and accessibility where appropriate
- _awkward abstractions (e.g. utility functions for classes)_
  - Bootstrap CSS is used for classes and custom styling is kept at a minimum for reusability
- _barebones component implementation_
  - Component directory is organized by category and abstraction; e.g. `/components/PageElements` contains reusable page elements which are used in higher-order components. `/components/AddCampaign` contains one such higher-order component.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
