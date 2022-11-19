import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import Colors from "../util/Colors";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={Colors.primary}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
      
      >
        <Text fontSize="4xl" fontFamily="Work sans" color={Colors.secondary} fontWeight="bold">
          Free-Talk
        </Text>
      </Box>
      <Box bg={Colors.primary} w="100%" p={4} borderRadius="lg">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" colorScheme={Colors.secondary}>
            <Tab _selected={{ color: 'white', bg: Colors.secondary,border:'none'}}  color={Colors.secondary}>Login</Tab>
            <Tab  _selected={{ color: 'white', bg: Colors.secondary,border:'none' }} color={Colors.secondary}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
