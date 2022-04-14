import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PosTagger">
    <Container>
      <Title>
        PosTagger <Badge>2021</Badge>
      </Title>
      <P>
      A university project for part-of-speech tagging,
      implemented with Hidden Markov Model
      for Latin and Ancient Greek languages.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub Link</Meta>
          <Link href="https://github.com/mcbaguetti/nlp-greek-latin-pos-tagger/">
            https://github.com/lpmcbg/nlp-greek-latin-pos-tagger <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/postagging_01.png" alt="PosTagger" />
      <WorkImage src="/images/works/postagging_02.png" alt="PosTagger" />
    </Container>
  </Layout>
)

export default Work
