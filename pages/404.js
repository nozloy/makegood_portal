import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Страница не найдена</Heading>
      <Text>Это не те дройды, которых вы ищете.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button variant={'makegoodButton'}>На главную</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound