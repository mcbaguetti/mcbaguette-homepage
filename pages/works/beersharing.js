import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BeerSharing">
    <Container>
      <Title>
        BeerSharing <Badge>2022-</Badge>
      </Title>
      <P>
      A webservice and an app for sharing your own beers as a homebrewer.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub Link</Meta>
          <Link href="/workinprogress">
            ... <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SpringBoot, MongoDB, VueJs, Ionic</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/beersharing_01.png" alt="BeerSharing" />
      <WorkImage src="/images/works/beersharing_02.png" alt="BeerSharing" />
    </Container>
  </Layout>
)

export default Work
