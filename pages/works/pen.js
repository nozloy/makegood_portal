import {Container, Badge, Box} from '@chakra-ui/react'
import {Meta, Title, WorkImage} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Ручка">
        <Container>
            <Title>
                Ручка <Badge>с гравировкой</Badge>
            </Title>
            <P>
            Брендирование ручек используют достаточно часто - это может быть как подарок,
                так и корпоративная символика для организации.
            </P>
            <Box mt={4}>
                <Meta>Кстати</Meta>
                <span>Оригинальная, качественная, дорогая брендовая ручка – показатель высокого статуса ее владельца и
                    уважения со стороны партнеров по бизнесу или коллег. Такой подарок обязательно оценят приверженцы
                    классического стиля в одежде – деловые люди, бизнесмены,
                    предприниматели и менеджеры высшего руководящего звена.
                </span>
            </Box>
            <WorkImage src="/images/works/pen.jpg" alt="Ручка" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
