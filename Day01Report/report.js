$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DDT.feature");
formatter.feature({
  "name": "Testing Multi-Datas",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Google Searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT"
    }
  ]
});
formatter.step({
  "name": "Environment is ready",
  "keyword": "Given "
});
formatter.step({
  "name": "got to the Website \"https://www.google.com\"",
  "keyword": "When "
});
formatter.step({
  "name": "search \"\u003cSearchDatas\u003e\" keyward",
  "keyword": "And "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SearchDatas"
      ]
    },
    {
      "cells": [
        "Lap-top"
      ]
    },
    {
      "cells": [
        "Potato"
      ]
    },
    {
      "cells": [
        "Computer"
      ]
    },
    {
      "cells": [
        "Ipad"
      ]
    },
    {
      "cells": [
        "Iphone"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Google Searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT"
    }
  ]
});
formatter.step({
  "name": "Environment is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.environment_is_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "got to the Website \"https://www.google.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.got_to_the_Website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search \"Lap-top\" keyward",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Google Searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT"
    }
  ]
});
formatter.step({
  "name": "Environment is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.environment_is_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "got to the Website \"https://www.google.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.got_to_the_Website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search \"Potato\" keyward",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Google Searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT"
    }
  ]
});
formatter.step({
  "name": "Environment is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.environment_is_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "got to the Website \"https://www.google.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.got_to_the_Website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search \"Computer\" keyward",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Google Searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT"
    }
  ]
});
formatter.step({
  "name": "Environment is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.environment_is_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "got to the Website \"https://www.google.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.got_to_the_Website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search \"Ipad\" keyward",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Google Searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT"
    }
  ]
});
formatter.step({
  "name": "Environment is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.environment_is_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "got to the Website \"https://www.google.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.got_to_the_Website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search \"Iphone\" keyward",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});