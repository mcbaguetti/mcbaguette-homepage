import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbBeerSharing from '../public/images/works/beersharing_01.png'
import thumbPosTag from '../public/images/works/postagging_01.png'
import thumbTill from '../public/images/works/tillverka_01.png'
import thumbAdrenaline from '../public/images/works/adrenaline_01.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem id="beersharing" title="BeerSharing" thumbnail={thumbBeerSharing}>
              A webservice and an app for sharing your own beers as a homebrewer.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="postagging" title="PosTagger" thumbnail={thumbPosTag}>
              A university project for part-of-speech tagging,
              implemented with Hidden Markov Model
              for Latin and Ancient Greek languages.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="tillverka" title="Tillverka" thumbnail={thumbTill}>
              A simple but aesthetic website for an italian 3d-printing startup.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="adrenaline" title="Adrenaline" thumbnail={thumbAdrenaline}>
              A university project based on a board game called Adrenaline,
              implemented with two other students of my course.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
