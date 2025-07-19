package karate.runner;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;

import karate.util.Cucumber;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class TestRunner {

    @Test
    void testParallel() {
        Results results = Runner.path("classpath:resources/features")
                //.tags("@")
                .outputCucumberJson(true)
                .parallel(1);
        Cucumber cucumber = new Cucumber();
        cucumber.output(results.getReportDir());

        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
