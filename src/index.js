
import express from 'express';
import server from './server';

const app =express()

const PORT =4000

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)