import org.apache.commons.configuration.ConfigurationException;
import org.junit.Test;

import java.io.IOException;

public class RunTestExample {
    @Test()
    public void login() throws IOException, ConfigurationException {
        stepDefinitions.Customer customer = new stepDefinitions.Customer();
        customer.i_call_the_endpoint();
    }

    @Test()
    public void customerList() throws IOException {
        stepDefinitions.Customer customer = new stepDefinitions.Customer();
        customer.i_should_see_the_response();
    }
}