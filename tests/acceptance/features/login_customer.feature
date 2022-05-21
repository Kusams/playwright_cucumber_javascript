Feature: As a customer I should successfully login to Mercury Tours site
  So that I can search for internal flights

  Scenario Outline: Login into the Mercury Tours page as a customer
    Given I am an authenticated Mercury Tours user
    When  I enter the "<typeOfLogin>" credentials and click login
    Then  I verify the "<typeOfLogin>" home page displayed
    Examples:
      | typeOfLogin |
      | customer    |

  Scenario Outline: Verify customer can search the flights
    Given I select "<sideMenu>" from side menu navigation
    And  I wait for flight page to be displayed
    Then  I select the flight from "<fromFlight>" to "<toFlight>"
    Examples:
      | sideMenu | fromFlight | toFlight |
      | Flights  | Sydney     | Zurich   |