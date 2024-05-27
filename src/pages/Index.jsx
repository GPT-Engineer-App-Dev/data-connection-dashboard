import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Sidebar />
        <Box ml="250px" p={4} width="100%">
          <VStack spacing={4} align="start">
            <Text fontSize="2xl" fontWeight="bold">Welcome to the Dashboard</Text>
            <Box bg="gray.100" p={4} borderRadius="md" width="100%">
              <Text fontSize="lg">Placeholder for Charts</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" width="100%">
              <Text fontSize="lg">Placeholder for Tables</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" width="100%">
              <Text fontSize="lg">Placeholder for Widgets</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;