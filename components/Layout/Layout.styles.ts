import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Box } from '../'

interface ITextProps extends SpaceProps {
  textSize?: number
  /**
   * Align text to the center of it's parent window
   */
  center?: boolean
  /**
   * Align text to the left/start of it's parent window
   */
  start?: boolean
  /**
   * Align text to the right/end of it's parent window
   */
  end?: boolean
}
const StyledBox = styled(Box)`
  color: ${({
    theme: {
      colors: { blue }
    }
  }) => blue};
  justify-content: center;
  overflow: hidden;
`

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${({
      theme: {
        breakPoints: { mobileM }
      }
    }) => mobileM}) {
    height: 400px;
  }
`

const Body = styled.main`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
  text-align: center;
  @media (min-width: ${({
      theme: {
        breakPoints: { tablet }
      }
    }) => tablet}) {
    height: 200px;
  }
`

const HeaderText = styled.h1`
  font-size: ${({
    theme: {
      headings: { big }
    }
  }) => big[1]};
`

const HeaderTwo = styled.h2<SpaceProps>`
  ${space}
`

const Separator = styled.div<SpaceProps>`
  ${space}
  width: 100%;
  text-align: center;
`

const Footer = styled.footer<SpaceProps>`
 ${space}
  font-size: ${({
    theme: {
      headings: { small }
    }
  }) => small[1]};
  height: 500px;
  text-align: center;
`

const Text = styled.p<ITextProps>`
  ${space}
  margin: 0;
  color: ${({
    theme: {
      colors: { blue }
    }
  }) => blue};
  font-size: ${({
    theme: {
      headings: { small }
    },
    textSize
  }) => small[typeof textSize === 'number' ? textSize : 1]};
  width: 100%;
`

const Icon = styled(FontAwesomeIcon)<SpaceProps>`
  ${space}
  font-size: ${({
    theme: {
      headings: { big }
    }
  }) => big[0]};
  cursor: pointer;
`

const Link = styled.a<ITextProps>`
  ${space}
  text-decoration: none;
  width: 100%;
  &:visited,
  :active {
    color: ${({
      theme: {
        colors: { blue }
      }
    }) => blue};
  }
  font-weight: 700;
  text-align: ${({ center, start, end }) =>
    (center && 'center') || (start && 'start') || (end && 'end')};
  margin: 0 auto;
`
const Section = styled.section``
export {
  StyledBox,
  Text,
  Icon,
  Footer,
  Body,
  Separator,
  Header,
  HeaderText,
  Link,
  HeaderTwo,
  Section
}
