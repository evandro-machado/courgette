# POM CukeTractor - Cucumber Protractor Runner with Setup for Page Object Model

![POM Cuke Tractor](https://raw.githubusercontent.com/canvaspixels/cucumber-protractor/master/pomCukeTractor.png)

## Create easy-to-read, functioning scenarios in minutes:

This assumes that you have an npm project. If you don't then make a new one with `npm init`.

1. Install the package: `npm install cucumber-protractor`
2. Setup
    1. Copy the sample file structure. Type: `cp -R node_modules/cucumber-protractor/uiTests uiTests` into your terminal
    2. Copy the sample config. Put `cp node_modules/cucumber-protractor/sample-conf.js conf.js` into your terminal. This will create a `uiTests` folder with the sample in it.
3. Run the sample, type `./node_modules/.bin/cuketractor` in your terminal in the root of your project.

### Futher tips:

1. To improve organisation and scalability, easily compose Page Objects and Component Objects. Page Objects and Component Objects are composed of [Locators](https://www.protractortest.org/#/locators), custom methods, and other Component Objects. Components can compose Components which compose Components etc. The only difference between a Page Object and a Component Object is a Component Object does not have an URL. Use the [step definitions provided](#step-definitions) (or create your own) to write your own first scenario.
2. If you're using source control such as git, add `uiTestResult` to your .gitignore file
3. As an improvement, to suppress deprecation warnings (if running node > 8) and also to type `cuketractor` rather than typing `./node_modules/.bin/cuketractor` each time, you can add the following line to your `~/.bash_profile` file:

```alias cuketractor="PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor"```

## Feature file by example

```
@google-home
Feature: Test feature

  @google-home-feeling-lucky
  Scenario: I am testing this out
    Given I go to the 'Google Home' page
    When I click 'I’m Feeling Lucky'
    Then I expect the url to contain 'google.com'
```

Note that all you need to be able to run that is a page object that looks like this:

```
const createPage = require('cucumber-protractor/uiTestHelpers/createPage');

module.exports = (world) =>
  createPage('google-home', world, 'https://www.google.com/', {
    'I’m Feeling Lucky': by.css('[value="I\'m Feeling Lucky"]'),
  });
```

You don't need to write any page methods, nor step definitions. How easy is that!!?

It’s advisable when writing your features to add a tag at the top of the Feature file and a tag to the beginning of each Scenario. A tag starts with a @. As a convention you can prefix each Scenario tag with whatever you've used at the top of the file (in this case @google-home). Try and keep them unique for your ease of use.

Note you can add more than one tag to each scenario and you could tag them when a hook tag that you can hook into Before or After each scenario. [Read more about hooks](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md) just add hooks to the existing ones in your conf.js file.

```
@google-home
Feature: Test feature

  @google-home-feeling-lucky
  Scenario: ...
    Given ...
    When ...
    Then ...

  @google-home-another-thing @some-special-hook-before-each-run
  Scenario: ...
    Given ...
    When ...
    Then ...

  @google-home-yet-another-thing @some-special-hook-before-each-run
  Scenario: ...
    Given ...
    When ...
    Then ...
```

## Running just one feature or one scenario

Continuing on from the examples above...

To run just one feature:

```
./node_modules/.bin/cuketractor --tags=@google-home
```

To run just one scenario:

```
./node_modules/.bin/cuketractor --tags=@google-home-another-thing
```

To run a couple (comma separate):

```
./node_modules/.bin/cuketractor --tags=@google-home-feeling-lucky,@google-home-another-thing
```


## Step Definitions

Note that the words in italics are optional.

### Given...

| Step definition | Notes |
| --- | --- |
| I go to the 'PAGENAME' page | PAGENAME should match the name of the page object file in your pages directory and the first argument to createPage in that same file. This step definition sets the current page object |
| the page url is 'URL' | |
| the page url is not 'URL' | |
| animations are disabled | |
| _the_ 'LOCATOR' is visible | |
| _the_ 'LOCATOR' is hidden | |
| _the_ 'LOCATOR' is enabled | |
| _the_ 'LOCATOR' is disabled | |
| _the_ 'LOCATOR' is selected | |
| _the_ 'LOCATOR' is checked | |
| _the_ 'LOCATOR' is not selected | |
| _the_ 'LOCATOR' is not checked | |
| _the_ 'LOCATOR' is on the page | |
| _the_ 'LOCATOR' is not on the page | |
| the title is 'LOCATOR' | |
| the title is not 'LOCATOR' | |
| _the_ 'LOCATOR' contains the text 'LOCATOR' | |
| _the_ 'LOCATOR' does not contain the text 'LOCATOR' | |
| _the_ 'LOCATOR' contains any text | |
| _the_ 'LOCATOR' does not contain any text | |
| _the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' | |
| _the_ 'LOCATOR' is empty | |
| _the_ 'LOCATOR' is not empty | |
| the value of _the_ 'LOCATOR' is 'VALUE' | |
| the value of _the_ 'LOCATOR' is not 'VALUE' | |
| I set the cookie 'LOCATOR' with value 'VALUE' | |
| the cookie 'LOCATOR' is set to 'VALUE' | |
| the cookie 'LOCATOR' is not set to 'VALUE' | |
| the cookie 'LOCATOR' is set | |
| the cookie 'LOCATOR' is not set | |

### When...

| Step definition | Notes |
| --- | --- |
| I click _the_ 'LOCATOR' | |
| I set 'LOCATOR' to value 'VALUE' | |
| I append 'STRING' to 'LOCATOR' | |
| I submit the _form_ 'LOCATOR' | |
| I press 'KEY' | |
| I clear _the_ 'LOCATOR' | |
| I&nbsp;select&nbsp;the&nbsp;option&nbsp;for&nbsp;select&nbsp;element&nbsp;'LOCATOR'&nbsp;with&nbsp;the&nbsp;text&nbsp;'VALUE' | |

### Then...

| Step definition | Notes |
| --- | --- |
| I expect to eventually be on the 'PAGENAME' page | Using this changes the page object to the PAGENAME so any subsequent steps in that scenario will be pointing to that page |
| I expect the url 'URL' is opened in a new tab | |
| I expect the url 'URL' is opened in a new window | |
| I expect the url to contain 'STRING' | |
| I expect the url to be 'STRING' | |
| I expect the url to not be 'STRING' | |
| I expect _the_ 'LOCATOR' to be visible | |
| I expect _the_ 'LOCATOR' to be hidden | |
| I expect the border colour of the 'LOCATOR' to be 'STRING' | |
| I expect the colour of the 'LOCATOR' to be 'STRING' | |
| I expect the background colour of the 'LOCATOR' to be 'STRING' | |
| I expect the title to be 'STRING' | |
| I expect the title to not be 'STRING' | |
| I expect _the_ 'LOCATOR' to appear exactly 'NUMBER' times | |
| I expect _the_ 'LOCATOR' to not appear exactly 'NUMBER' times | |
| I expect _the_ 'LOCATOR' to exist | |
| I expect _the_ 'LOCATOR' to not exist | |
| I expect _the_ 'LOCATOR' to contain the text 'STRING' | |
| I expect _the_ 'LOCATOR' to not contain the text 'STRING' | |
| I expect _the_ 'LOCATOR' to contain any text | |
| I expect _the_ 'LOCATOR' to not contain any text | |
| I expect _the_ 'LOCATOR' to be checked | |
| I expect _the_ 'LOCATOR' to not be checked | |
| I expect _the_ 'LOCATOR' to be selected | |
| I expect _the_ 'LOCATOR' to not be selected | |
| I expect _the_ 'LOCATOR' to be enabled | |
| I expect _the_ 'LOCATOR' to be disabled | |
| I expect cookie 'LOCATOR' to contain 'VALUE' | |
| I expect cookie 'LOCATOR' to not contain 'VALUE' | |
| I expect cookie 'LOCATOR' to exist | |
| I expect cookie 'LOCATOR' to not exist | |
| I expect _the_ 'LOCATOR' to have the class 'CLASSNAME' | |
| I expect _the_ 'LOCATOR' to not have the class 'CLASSNAME' | |
| I expect _the_ 'LOCATOR' to be focused | |
| I expect _the_ 'LOCATOR' to be empty | |
| I expect _the_ 'LOCATOR' to not be empty | |
| I expect the value of _the_ 'LOCATOR' to be 'VALUE'  | |
| I expect the value of _the_ 'LOCATOR' to not be 'VALUE'  | |
| I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE'  | |
| fail step and take screenshot | |