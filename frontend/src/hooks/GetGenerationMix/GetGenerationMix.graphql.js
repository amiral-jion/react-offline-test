import gql from 'graphql-tag'

const GetGenerationMix = gql`
  query GetGenerationMix {
    getGenerationMix {
      generationmix{
        fuel
        perc
      }
    }
  }
`

export default GetGenerationMix
