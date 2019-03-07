package Fundamentals;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class) //running cucumber with Junit
@CucumberOptions(features = "Features/syntax.feature", //it can indicate what we gonna run in cucumber
                            glue = "TestSteps", //glue will indicate the method
                                                //glue in only looking for the package under the java.
                            dryRun=false,
                            plugin="html:CucumberReport")     //

//@CucumberOptions=>it indicates what we need to run in cucumber
//glue=>it indicates where Scenario steps are to glue it with this page. It directly goes to java package
//dryRun=> if we make it true it will implements(creates step definition) new created test case only.
//         if we make it false it will execute the testcase and feature files

public class Syntax {

}
