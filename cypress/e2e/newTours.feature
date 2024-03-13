Feature: new tour validations

Background:
    Given Open new tour application
@smoke
Scenario: Home Page
When I login with following users
    |userName|password|
    |mercury|mercury|
Then Click submit button
And Verify title of page

@regression
Scenario: Home Page
When I login with following users
    |userName|password|
    |mercury|mercury|
Then Click submit button
And Verify title of page
