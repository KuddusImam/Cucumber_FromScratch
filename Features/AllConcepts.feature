@random
Feature: All Tests

  Scenario: Google Search
    Given Environment is ready
    When got to the Website "https://www.google.com"
    And search "lap-top"
    Then Close the browser
    * Test Ended
    But Print "Kuddus" on the console
    Then Print "Imam" on the console
