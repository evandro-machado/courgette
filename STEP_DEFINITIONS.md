## Step Definitions

Note that the words in italics are optional.

### Given...

| Step definition | Notes |
| --- | --- |
| I go to the 'PAGE_NAME' page | PAGE_NAME should match the name of the page object file in your pages directory and the first argument to createPage in that same file. This step definition sets the current page object |
| the page url is 'URL' |  |
| the page url is not 'URL' |  |
| animations are disabled |  |
| _the_ 'LOCATOR' is visible |  |
| _the_ 'LOCATOR' is hidden |  |
| _the_ 'LOCATOR' is enabled |  |
| _the_ 'LOCATOR' is disabled |  |
| _the_ 'LOCATOR' is selected |  |
| _the_ 'LOCATOR' is not selected |  |
| _the_ 'LOCATOR' is checked |  |
| _the_ 'LOCATOR' is not checked |  |
| _the_ 'LOCATOR' is on the page |  |
| _the_ 'LOCATOR' is not on the page |  |
| the title is 'LOCATOR' |  |
| the title is not 'LOCATOR' |  |
| _the_ 'LOCATOR' contains the text 'LOCATOR' |  |
| _the_ 'LOCATOR' does not contain the text 'LOCATOR' |  |
| _the_ 'LOCATOR' contains any text |  |
| _the_ 'LOCATOR' does not contain any text |  |
| _the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' |  |
| _the_ 'LOCATOR' is empty |  |
| _the_ 'LOCATOR' is not empty |  |
| the value of _the_ 'LOCATOR' is 'VALUE' |  |
| the value of _the_ 'LOCATOR' is not 'VALUE' |  |
| I set the cookie 'COOKIE_NAME' with value 'VALUE' |  |
| the cookie 'COOKIE_NAME' is set to 'VALUE' |  |
| the cookie 'COOKIE_NAME' is not set to 'VALUE' |  |
| the cookie 'COOKIE_NAME' is set |  |
| the cookie 'COOKIE_NAME' is not set |  |

### When...

| Step definition | Notes |
| --- | --- |
| I click _the_ 'LOCATOR' |  |
| I append 'LOCATOR' to 'LOCATOR' |  |
| I set 'LOCATOR' to 'LOCATOR' |  |
| I append 'LOCATOR' to react field 'LOCATOR' |  |
| I set react field 'LOCATOR' to 'LOCATOR' |  |
| I submit the _form_ 'LOCATOR' |  |
| I press 'KEY' |  |
| I clear _the_ 'LOCATOR' |  |
| I&nbsp;select&nbsp;the&nbsp;option&nbsp;for&nbsp;select&nbsp;element&nbsp;'LOCATOR'&nbsp;with&nbsp;the&nbsp;text&nbsp;'VALUE' |  |

### Then...

| Step definition | Notes |
| --- | --- |
| I expect to eventually be on the 'PAGE_NAME' page | Using this changes the page object to the PAGE_NAME so any subsequent steps in that scenario will be pointing to that page |
| I expect the url 'URL' is opened in a new tab |  |
| I expect the url 'URL' is opened in a new window |  |
| I expect the url to contain 'STRING' |  |
| I expect the url to be 'STRING' |  |
| I expect the url to not be 'STRING' |  |
| I expect _the_ 'LOCATOR' to be visible |  |
| I expect _the_ 'LOCATOR' to be hidden |  |
| I expect the border colour of the 'LOCATOR' to be 'STRING' |  |
| I expect the colour of the 'LOCATOR' to be 'STRING' |  |
| I expect the background colour of the 'LOCATOR' to be 'STRING' |  |
| I expect the title to be 'STRING' |  |
| I expect the title to not be 'STRING' |  |
| I expect _the_ 'LOCATOR' to contain the text 'STRING' |  |
| I expect _the_ 'LOCATOR' to not contain the text 'STRING' |  |
| I expect _the_ 'LOCATOR' to contain any text |  |
| I expect _the_ 'LOCATOR' to not contain any text |  |
| I expect _the_ 'LOCATOR' to appear exactly 'NUMBER' times |  |
| I expect _the_ 'LOCATOR' to not appear exactly 'NUMBER' times |  |
| I expect _the_ 'LOCATOR' to exist |  |
| I expect _the_ 'LOCATOR' to not exist |  |
| I expect _the_ 'LOCATOR' to be checked |  |
| I expect _the_ 'LOCATOR' to not be checked |  |
| I expect _the_ 'LOCATOR' to be selected |  |
| I expect _the_ 'LOCATOR' to not be selected |  |
| I expect _the_ 'LOCATOR' to be enabled |  |
| I expect _the_ 'LOCATOR' to be disabled |  |
| I expect cookie 'COOKIE_NAME' to contain 'STRING' |  |
| I expect cookie 'COOKIE_NAME' to not contain 'STRING' |  |
| I expect cookie 'COOKIE_NAME' to exist |  |
| I expect cookie 'COOKIE_NAME' to not exist |  |
| I expect _the_ 'LOCATOR' to have the class 'CLASS_NAME' |  |
| I expect _the_ 'LOCATOR' to not have the class 'CLASS_NAME' |  |
| I expect _the_ 'LOCATOR' to be focused |  |
| I expect _the_ 'LOCATOR' to be empty |  |
| I expect _the_ 'LOCATOR' to not be empty |  |
| I expect the value of _the_ 'LOCATOR' to be 'STRING'  |  |
| I expect the value of _the_ 'LOCATOR' to not be 'STRING'  |  |
| I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' |  |
| fail step and take screenshot |  |