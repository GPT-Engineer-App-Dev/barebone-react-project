import { Container, Text, VStack, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr={4}>
            Home
          </Button>
          <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">
            About
          </Button>
          {session ? (
            <Button onClick={logout} variant="ghost" colorScheme="whiteAlpha">
              Logout
            </Button>
          ) : (
            <Button as={Link} to="/login" variant="ghost" colorScheme="whiteAlpha">
              Login
            </Button>
          )}
        </Box>
      </Flex>
      <VStack spacing={4} mt={8}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to MyApp</Text>
        <Text fontSize="xl">This is your starting point. Begin building your application here.</Text>
      </VStack>
    </Container>
  );
};

export default Index;