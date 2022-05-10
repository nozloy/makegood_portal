import { Container, Badge, List, ListItem, ListIcon } from '@chakra-ui/react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Ежедневник">
        <Container>
            <Title>
                Ежедневник <Badge>с гравировкой</Badge>
            </Title>
            <P>
                Планировать свой день и вести активные записи на порядок приятнее вместе с именным ежедневником с гравировкой
            </P>
            <List ml={4} my={4}>
                <ListItem><ListIcon as={AiFillCheckCircle} color='green.500' />
                    Простой и минималистичный ежедневник</ListItem>
                <ListItem><ListIcon as={AiFillCheckCircle} color='green.500' />
                    Несколько вариантов наполнения</ListItem>
                <ListItem><ListIcon as={AiFillCheckCircle} color='green.500' />
                    Широкий выбор обложек по материалу и исполнению</ListItem>
            </List>

            <WorkImage src="/images/works/notebook.jpg" alt="ежедневник" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
