import { Container, Box, Heading, Image } from "@chakra-ui/react"
import { useColorModeValue } from '@chakra-ui/react'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from "../components/layouts/article"

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box
                borderRadius="lg"
                bg="#B22181"
                p="3"
                mb="6"
                mt="3"
                align="center"
                color={useColorModeValue('whiteAlpha.900',
                    'whiteAlpha.800')}>Привет, мы гравируем металл, но не режем его!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h1" variant="page-title" >
                        Лазерная резка и гравировка
                    </Heading>
                    <h2>кожи, дерева, пластика, металла, акрила и стекла</h2>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="120px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/laser.jpg"
                        alt="лазер" />
                </Box>
            </Box>
            <Section delay={0.1} >
                <Heading as='h3' variant="section-title" mt={45}>
                Как мы работаем
                </Heading>
                <Paragraph>
                К нам обращаются как частные заказчики, так и корпоративные клиенты.
                Утвердив материал, макет и сроки - приступаем к работе. Для гравировки сложных предметов требуются тестовые экземпляры.
                При необходимости поможем найти и заказать предметы для гравировки - ручки, ежедневники, бокалы и т.д.
                Оплатить можно наличным и безналичным расчетом.
                </Paragraph>
                </Section> 
        </Container>
        </Layout>
    )
}
export default Page