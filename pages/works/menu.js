import { Container, Badge, Box, Link, List, ListItem, ListIcon, Icon } from '@chakra-ui/react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Меню">
        <Container>
            <Title>
                Термокружки <Badge>с гравировкой</Badge>
            </Title>
            <P>
                Обложка с гравировкой логотипа на лицевой стороне.
                Обработка составом, включающим масло и воск, что дало водоотталкивающие свойства и приятный цвет.
                Печатный блок на синтетической бумаге, которой также не страшна вода и масло.
                Крепеление на кольцевом механизме - это позволяет в дальнейшем без проблем менять информацию в меню.
            </P>
            <Box mt={4}>
                <Meta>Кстати</Meta>
                <span>Посетителей кафе и ресторанов чаще всего привлекает опрятное и неизносившееся меню. </span>
            </Box>
            <WorkImage src="/images/works/menu.jpg" alt="Меню" />
            <WorkImage src="/images/works/menu_2.jpg" alt="Меню" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'