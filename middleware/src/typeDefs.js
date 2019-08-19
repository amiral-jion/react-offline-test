const typeDefs =
	`
type Value {
  fuel: String
  perc: Float
}

type Result{
    from : String
    to : String
    generationmix : [Value]
}

type Query {
  hello(name: String): String!
  getGenerationMix: Result
}
`;
module.exports = typeDefs;
