import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

 import calendar from '../public/images/works/calendar.jpg'
 import thermug from '../public/images/works/thermug.jpg'
 import menu from '../public/images/works/menu.jpg'
 import notebook from '../public/images/works/notebook.jpg'
 import pen from '../public/images/works/pen.jpg'
 import wineglass_one from '../public/images/works/wineglass_one.jpg'

const Works = () => (
  <Layout title="Наши работы">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={5}>
        Наши работы
      </Heading>

      <SimpleGrid minChildWidth='120px' gap={6}>
        <Section>
          <WorkGridItem
            id="calendar"
            title="Календарь"
            thumbnail={calendar}>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="thermug"
            title="Термокружки"
            thumbnail={thermug}>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="menu"
            title="Меню"
            thumbnail={menu}>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="notebook"
            title="Ежедневник с гравировкой"
            thumbnail={notebook}>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="pen"
            title="Гравировка на ручке"
            thumbnail={pen}>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="wineglass_one"
            title="Гравировка на бокале"
            thumbnail={wineglass_one}>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'