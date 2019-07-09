import * as React from 'react'
import { Avatar, Bio } from '../'
import {
  StyledBox,
  Text,
  Icon,
  Footer,
  Body,
  Separator,
  Header,
  HeaderText,
  Link,
  SubText
} from './Layout.styles'
import {
  faGithubSquare,
  faMedium,
  faLinkedin,
  faTwitterSquare,
  faDev
} from '@fortawesome/free-brands-svg-icons'
import { useSpring, animated } from 'react-spring'

const findMeData = [
  { url: 'https://github.com/aromanarguello', icon: faGithubSquare },
  { url: 'https://medium.com/@aromanarguello', icon: faMedium },
  { url: 'https://www.linkedin.com/in/aromanarguello/', icon: faLinkedin },
  { url: 'https://twitter.com/aromanarguello', icon: faTwitterSquare },
  { url: 'https://dev.to/aromanarguello', icon: faDev }
]

/**
 * opens link in new tab
 * @param url
 */
const openNewTab = (url: string) => window.open(url, '_blank')

const Layout: React.FC = () => {
  const [isLoaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    document.title = "Alejandro Roman's Personal Site"
    setLoaded(true)
  }, [])

  const [props, set] = useSpring(() => ({
    opacity: 0,
    config: {
      mass: 300,
      tension: 450,
      friction: 500
    }
  }))

  set({ opacity: isLoaded ? 1 : 0 })

  return (
    <StyledBox
      width={[375, 768, 1024]}
      height={1000}
      margin="0 auto"
      paddingTop={50}
      boxSizing="border-box"
      flex="content"
      flexDirection="column"
    >
      <animated.div style={props}>
        <Header>
          <Avatar imageName="avatar" />
          <HeaderText>Alejandro Roman</HeaderText>
        </Header>
        <Separator>{`.   .   .`}</Separator>
        <Body padding="0">
          <Bio />
          <Link
            center
            pt="10px"
            href="https://github.com/aromanarguello/site-nextjs"
          >
            Source code
          </Link>
        </Body>
        <Separator mb="35px">{`.   .   .`}</Separator>
        <Footer padding="0 15px">
          <Text pb="10px">Find me at:</Text>
          <StyledBox width={[375, 768, 1024]} height="300px" flex="content">
            {findMeData.map(({ url, icon }, index) => (
              <a onClick={() => openNewTab(url)} key={index}>
                <Icon
                  icon={icon}
                  pl={index === 0 ? 0 : '15px'}
                  pr="15px"
                  pb="10px"
                />
              </a>
            ))}
            <Text pb="10px">Project built at a hackathon:</Text>
            <Link href={'https://zealous-varahamihira-8ecd9a.netlify.com'}>
              BitWorker
            </Link>
            <SubText margin="10px 0" textSize={0}>
              Built on: 01-20-19
            </SubText>
            <SubText margin="10px 0" textSize={0}>
              Tech stack: ReactJS, Redux, JSS, Express
            </SubText>
          </StyledBox>
        </Footer>
      </animated.div>
    </StyledBox>
  )
}

export default Layout
