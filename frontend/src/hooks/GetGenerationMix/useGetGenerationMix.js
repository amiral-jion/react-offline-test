import { useQuery } from '@apollo/react-hooks'
import GetGenerationMix from './GetGenerationMix.graphql'


function useGetGenerationMix() {
  const { data, error, loading } = useQuery(GetGenerationMix)
  return { data, error, loading }
}

export default useGetGenerationMix
