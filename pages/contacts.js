import { Container, Heading, Button, HStack, List, ListItem, Link, Box, SimpleGrid, GridItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { FaTelegram, FaWhatsapp, FaYandex, FaMapMarkedAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Section from "../components/section"

const Contacts = () => (
    <Layout title="Контакты">
        <Container>
        
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem>
            <Section delay={0.3}>
            <Heading as="h3" fontSize={20} mb={4} mt={5} variant="section-title">
            Контакты
            </Heading>
            <List>
          <ListItem>
            <Link href="https://t.me/makegoodgroup" target="_blank">
              <Button
                variant="ghost"
                colorScheme="telegram"
                leftIcon={<FaTelegram />}
                size='lg'
              >
                Telegram
              </Button>
              </Link>
          </ListItem>

          <ListItem>
            <Link href="https://wa.me/+79534062046" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<FaWhatsapp />}
                size='lg'
              >
                Whats'Up
              </Button>
              </Link>
          </ListItem>

          <ListItem>
            <Link href="https://yandex.ru/maps/-/CCUFVLbH3A" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<FaYandex />}
                size='lg'
              >
                Карты
              </Button>
              </Link>
          </ListItem>

          <ListItem>
            <Link href="https://yandex.ru/maps/-/CCUFVLbH3A" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<FaMapMarkedAlt />}
                size='lg'
              >
                2Gis
              </Button>
              </Link>
          </ListItem>

          <ListItem>
            <Link href="mailto:laser@makegood.group" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<MdEmail />}
                size='lg'
              >
                E-MAIL
              </Button>
              </Link>
          </ListItem>
          </List>
            </Section>
            </GridItem>
            
            <GridItem>
            <Section delay={0.5}>
            <Heading as="h3" fontSize={20} mb={4} mt={5} variant="section-title">
            Наш адрес
            </Heading>
            <List>
          <ListItem>
            <Link href="https://yandex.ru/maps/-/CCUFVLbH3A" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                size='lg'
              >
                <h4>г. Казань, ул. Товарищеская, д.27</h4>
              </Button>
              </Link>
          </ListItem>
          </List>
            </Section>

            <Section delay={0.6}>
            <Heading as="h3" fontSize={20} mb={4} mt={5} variant="section-title">
                Телефон
            </Heading>
            <List>
          <ListItem>
            <Link href="tel:+79534062046" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                size='lg'
              >
                +7 (953) 406-20-46
              </Button>
              </Link>
          </ListItem>

          <ListItem>
            <Link href="tel:+78437179656" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                size='lg'
              >
                +7 (843) 717-96-56
              </Button>
              </Link>
          </ListItem>
          </List>
            </Section>
            </GridItem>
        </SimpleGrid>
        </Container>
    </Layout>

)

export default Contacts