import * as React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  margin: 0;
  color: ${({
    theme: {
      colors: { blue }
    }
  }) => blue};
  font-size: ${({
    theme: {
      headings: { small }
    }
  }) => small[1]};
  width: 100%;
  padding: 5px 0;
`

const Bio: React.FC = () => {
  return (
    <>
      <Text>
        I am a front-end engineer based in Miami, FL. I work for General
        Electric in the Digital Technology Workplace space and form part of an
        amazing team that helps build amazing components and tools using my
        favorite technology, React. I am a huge proponent of best practices,
        testing and accessability.
      </Text>
      <Text>
        I am also supporing the creation of an open source project based out of
        Miami🌴!
      </Text>
      <Text>
        My hobbies include writing awesome components, learning new technologies
        and then writting about them through blogpost
      </Text>
    </>
  )
}

export default Bio
