import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="blue.600" px={4} py={2} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">Dashboard</Text>
        <Flex alignItems="center">
          <IconButton aria-label="Notifications" icon={<FaBell />} variant="ghost" color="white" />
          <IconButton aria-label="User Profile" icon={<FaUserCircle />} variant="ghost" color="white" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;