import * as React from 'react'
import { Text, Link } from '../Layout/Layout.styles'

const Bio: React.FC = () => {
  return (
    <>
      <Text pb="20px">
        I am a front-end engineer based in Miami, FL. I work for General
        Electric in the Digital Workplace Technology space and form part of an
        amazing team that helps build amazing components and tools using my
        favorite technology, React. I am a huge proponent of best practices,
        testing and accessibility.
      </Text>
      <Text>
        I am also supporting the creation of an open source project based out of
        Miami🌴!
      </Text>
      <Text pb="20px">
        Check it out:{' '}
        <Link href="https://github.com/open-source-miami/component-library">
          Open Source Miami
        </Link>{' '}
      </Text>

      <Text pb="20px">
        My hobbies include writing awesome components, learning new technologies
        and then writting about them through blogpost
      </Text>
    </>
  )
}

export default Bio
