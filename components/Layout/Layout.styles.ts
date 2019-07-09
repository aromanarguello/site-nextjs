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
`

const Header = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${({
      theme: {
        breakPoints: { mobileM }
      }
    }) => mobileM}) {
    height: 400px;
  }
`

const Body = styled(Box)`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
  @media (min-width: ${({
      theme: {
        breakPoints: { tablet }
      }
    }) => tablet}) {
    height: 340px;
  }
`

const HeaderText = styled.p`
  font-size: ${({
    theme: {
      headings: { big }
    }
  }) => big[1]};
`

const Separator = styled.div<SpaceProps>`
  ${space}
  width: 100%;
  text-align: center;
`

const Footer = styled(Box)`
  font-size: ${({
    theme: {
      headings: { small }
    }
  }) => small[1]};
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
const SubText = styled.p<ITextProps>`
  ${space}
  width: 100%;
  font-size: ${({ theme: { fontSizes }, textSize }) =>
    fontSizes[Number(textSize)]};
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
`
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
  SubText
}
