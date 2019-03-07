#search: laptop, potato, computer, Iapd, ....

Feature: Testing Multi-Datas

  @DDT
  Scenario Outline: Google Searches
    Given Environment is ready
    When got to the Website "https://www.google.com"
    And search "<SearchDatas>" keyward
    Then Close the browser

    Examples:
    | SearchDatas |
    | Lap-top     |
    | Potato      |
    | Computer    |
    | Ipad        |
    | Iphone      |