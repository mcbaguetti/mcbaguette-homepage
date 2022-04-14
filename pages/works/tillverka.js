import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Tillverka">
    <Container>
      <Title>
        Tillverka <Badge>2020</Badge>
      </Title>
      <P>
      A simple but aesthetic website for an italian 3d-printing startup.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="">
             <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/Android/iOS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tillverka_01.png" alt="Tillverka" />
      <WorkImage src="/images/works/tillverka_02.png" alt="Tillverka" />
    </Container>
  </Layout>
)

export default Work