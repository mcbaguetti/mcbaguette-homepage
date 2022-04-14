import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Adrenaline">
    <Container>
      <Title>
        Adrenaline <Badge>2019</Badge>
      </Title>
      <P>
      A university project based on a board game called Adrenaline,
      implemented with two other students of my course.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub Link</Meta>
          <Link href="https://github.com/SalvadorCali/Adrenalina">
            https://github.com/SalvadorCali/Adrenalina <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Socket/RMI Connection, JavaFx</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/adrenaline_01.png" alt="Adrenaline" />
      <WorkImage src="/images/works/adrenaline_02.png" alt="Adrenaline" />
    </Container>
  </Layout>
)

export default Work
