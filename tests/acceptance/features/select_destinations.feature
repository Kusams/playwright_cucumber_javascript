Feature: As a Investor I should successfully login to Mercury Tours site
  So that I can search for internal flights

  Scenario Outline: Login into the Mercury Tours page as a Investor
    Given I login as "<typeOfLogin>" into Mercury Tours application
    When  I enter the "<typeOfLogin>" credentials and click login
    Then  I verify the home page displayed
    Examples:
      | typeOfLogin |
      | Investor    |

  Scenario Outline: Verify Investor can search the destinations
    Given I select "<sideMenu>" from side menu navigation
    When  I wait for destination page to be displayed
    Then  I go back to home page from destination page
    Examples:
      | sideMenu     |
      | Destinations |