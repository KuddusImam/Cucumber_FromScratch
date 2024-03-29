package Fundamentals;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Features",
                glue = "TestSteps",
                tags = "@DDT",
                dryRun = false,
                plugin={"html:Day01Report",
                        "junit:Day01Report/myJunitReport.xml",
                        "pretty:Day01Report/MyPretty.txt",
                        "usage:Day01Report/MyUsage.json"}
)

//

public class Practice {


}

//•	And ,but and *   does not have Sentech, it will change whatever they have in in the front.
//        •	When you only use Sentech of but and *, when we run the method comes out without them and just prints out given .
//        •	@RunWith(Cucumber.class) //=>this will run cucumber with Junit.
//•	@CucumberOptions(features = "Features/Syntax.feature", glue="TestSteps",dryRun = true)
//•	@CucumberOptions=>it indicates what we need to run in cucumber
//        •	glue=>it indicates where Scenario steps are to glue it with this page. It directly goes to java package
//        •	dryRun=> if we make it true it will implements(creates step definition) new created test case only.
//        •	if we make it false it will execute the testcase and feature files
//        Collapse
//        •	glue will indicate where the scenario steps methods are
//        •	glue will only check java packages, that means i have provide the package name(which where the steps are )
//        •	if we have the steps under two packages EX(package TestSteps -> packages TestStep2 -> then the test step class) we have to provide the biggest package.
//        •	In feature file ,if i put Data in the "" , it will secure the data for me
//        •	I have generated xml,html,pretty and usage reports with jUnit on the cucumber
//        •	 plugin ==> it will generate report
//        •	 but if we declaring one then one, we have to do it as array {}
//
//@RunWith(Cucumber.class)
//this mean we run the cucumber as class with junit
//this will run the Junit
//@CucumberOptions(features = "features/syntax.feature")
//this mean I’m running whatever in "" in cucumber
//we are not running anything inside the class because we using junit
//it can indicate what we are going to run cucumber