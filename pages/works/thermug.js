import { Container, Badge, Box } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Календарь">
        <Container>
            <Title>
                Термокружки <Badge>с гравировкой</Badge>
            </Title>
            <P>
            Мы поддерживаем крутую идею покупать кофе в своих термосах и коферах,
            чтобы снизить потребление одноразовой посуды и предлагаем сделать это оригинально!
            </P>
            <Box mt={4}>
            <Meta>Кстати</Meta>
          <span>Термокружка с классным логотопом или слоганом - отличный подарок.</span>
            </Box>

            <WorkImage src="/images/works/thermug.jpg" alt="термокружка" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
