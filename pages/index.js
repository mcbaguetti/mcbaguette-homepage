import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoInstagram,
  IoLogoTwitch
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align="center">
          Hello, I'm a computer science student based in Italy!
        </Box>

        <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
        <Heading as="h2"  variant="page-title">
          Tommaso Comelli
        </Heading>
      <p>Digital Craftzman (Artist / Developer / Videomaker)</p>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 0}} ml={{ md: 6}} align="center">
        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/tom.jpg" alt="Profile Image"/>
      </Box>
      </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>I'm a computer science student based in Milan, with a passion for building digital services/stuff. I have a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, I love hanging out with friends, playing football, studying chinese, homebrewing, painting and so on.{' '}
          .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
          Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Milan(米兰), Italy.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Bachelor's Program in Computer Engineering at Politecnico di Milano
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Master's Program in Computer Science at Università degli Studi di Torino
          </BioSection>
        </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              I ♥
            </Heading>
             <Paragraph>
              Art, Music,{' '}
             <Link href="https://illust.odoruinu.net/" target="_blank">
               Painting
             </Link>
             , Coffee,{' '}
             <Link href="https://500px.com/p/craftzdog" target="_blank">
               Videomaking
             </Link>
             , Homebrewing, Skating, Studying Chinese, Memes, Beer
           </Paragraph>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              On the web
            </Heading>
            <List>
              <ListItem>
           <Link href="https://github.com/mcbaguetti" target="_blank">
             <Button
               variant="ghost"
               colorScheme="teal"
               leftIcon={<IoLogoGithub />}
             >
               @mcbaguetti
             </Button>
           </Link>
         </ListItem>
         <ListItem>
           <Link href="https://twitter.com/TommasoComelli" target="_blank">
             <Button
               variant="ghost"
               colorScheme="teal"
               leftIcon={<IoLogoTwitter />}
             >
               @TommasoComelli (mcbaguette)
             </Button>
           </Link>
         </ListItem>
         <ListItem>
           <Link href="https://discord.gg/3NEnj7ca" target="_blank">
             <Button
               variant="ghost"
               colorScheme="teal"
               leftIcon={<IoLogoDiscord />}
             >
              Baguettown
             </Button>
           </Link>
         </ListItem>
         <ListItem>
           <Link href="https://www.instagram.com/mc_baguette/" target="_blank">
             <Button
               variant="ghost"
               colorScheme="teal"
               leftIcon={<IoLogoInstagram />}
             >
              mc_baguette
             </Button>
           </Link>
         </ListItem>
         <ListItem>
           <Link href="https://www.twitch.tv/mcbaguetti" target="_blank">
             <Button
               variant="ghost"
               colorScheme="teal"
               leftIcon={<IoLogoTwitch />}
             >
              mcbaguetti
             </Button>
           </Link>
         </ListItem>
            </List>
          </Section>
      </Container>
    </Layout>
  )
}

export default Page
