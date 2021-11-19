import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Roberto</Text>
        <Text color="gray.300" fontSize="small">
          luucasroberto250@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Lucas Roberto"
        src="https://github.com/devLucasRoberto.png"
      />
    </Flex>
  )
}
