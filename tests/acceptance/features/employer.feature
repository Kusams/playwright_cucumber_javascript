Feature: As a employer I should successfully login to Mercury Tours site
  So that I can search for internal flights

  Scenario Outline: Login into the Mercury Tours page as a employer
    Given I login as "<typeOfLogin>" into Mercury Tours application
    When  I enter the "<typeOfLogin>" credentials and click login
    Then  I verify the home page displayed
    Examples:
      | typeOfLogin |
      | employer    |
