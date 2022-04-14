import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbSumie from '../public/images/contents/sumie.jpg'
import thumbHomeBrewing from '../public/images/contents/homebrewing.jpg'
import thumbChinese from '../public/images/contents/chinese.jpg'
import thumbVideomaking from '../public/images/contents/videomaking.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
      Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1,2,2]} gap={6}>
          <GridItem
            title="Sumi-e"
            thumbnail={thumbSumie}
            href=""
          />
          <GridItem
            title="Homebrewing"
            thumbnail={thumbHomeBrewing}
            href=""
          />
          <GridItem
            title="Chinese"
            thumbnail={thumbChinese}
            href=""
          />
          <GridItem
            title="Videomaking"
            thumbnail={thumbVideomaking}
            href=""
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
