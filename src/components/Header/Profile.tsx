import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center" text-align="right">
      <Box mr="4" >
        <Text>Paulo Pimentel</Text>
        <Text color="gray.300" fontSize="small">
          pauloh.g.pimentel@gmail.com
        </Text>
      </Box>
      
      <Avatar size="md" name="Paulo Pimentel" src="https://avatars.githubusercontent.com/u/25647587?v=4" />
    </Flex>
  );
}