import { Box, VStack, Text, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" width="250px" height="100vh" p={4} position="fixed">
      <VStack spacing={4} align="start">
        <Text fontSize="lg" fontWeight="bold">Navigation</Text>
        <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Dashboard</Link>
        <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Charts</Link>
        <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tables</Link>
        <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Widgets</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;