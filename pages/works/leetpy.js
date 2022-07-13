import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Leetpy">
    <Container>
      <Title>
        Leetpy <Badge>2022-</Badge>
      </Title>
      <P>
      A personal to exercise Python and problem solving skills with
      Leetcode problems, I also created a Youtube channel
      for teaching and explaining these problems in Italian.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub Link</Meta>
          <Link href="https://github.com/mcbaguetti/leetpy">
             https://github.com/mcbaguetti/leetpy <ExternalLinkIcon mx="2px" />
          </Link>
          <Meta>YT Channel</Meta>
          <Link href="https://www.youtube.com/channel/UCPfxvLu5evD3SyJWIB8vyug">
             https://www.youtube.com/channel/UCPfxvLu5evD3SyJWIB8vyug <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/leetpy_01.png" alt="Leetpy" />
      <WorkImage src="/images/works/leetpy_02.png" alt="Leetpy" />
    </Container>
  </Layout>
)

export default Work
