import { ApolloServer } from 'apollo-server';
import { getGenerationMix } from './utils';
import typeDefs from './typeDefs';

const resolvers = {
	Query: {
		hello: (parent, { name }) => `Hello ${name || 'World'}!`,
    getGenerationMix: () => {
			return getGenerationMix()
				.then(result => result.data)
				.catch((error) => {
					console.log(error);
				});
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
