import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '../data/resolvers.graphql';
import { typeDefs } from '../data/schema.graphql';
import { PORT } from '../config/config';

import cors from 'cors';



async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    await server.start();
    app.use(cors());
    server.applyMiddleware({app, path: '/graphql', cors: false});
    
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
    })
}

startApolloServer(typeDefs, resolvers);