import { Container, Badge, Link, List, ListItem, ListIcon, Icon } from '@chakra-ui/react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Календарь">
        <Container>
            <Title>
                Календарь <Badge>додекаэдр</Badge>
            </Title>
            <P>
                На фото наши календари в форме додекаэдра.
                Обычно их собирают из картона, но мы пошли дальше и оптимизировали макет под дерево.
                Такой календарь гораздо прочнее и надежнее.
            </P>
            <List ml={4} my={4}>
                <ListItem><ListIcon as={AiFillCheckCircle} color='green.500' />
                Практичный и полезный подарок</ListItem>
                <ListItem><ListIcon as={AiFillCheckCircle} color='green.500' />
                Выглядит необычно и со вкусом</ListItem>
                <ListItem><ListIcon as={AiFillCheckCircle} color='green.500' />
                Сложно повредить</ListItem>
            </List>

            <WorkImage src="/images/works/calendar.jpg" alt="календарь" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
