import { gql } from 'apollo-server-express';
import { query } from 'express';

const user=[
    {
    id: "1",
    name: "o2",
    usermane: "KING",
    password: "10",
    email: "KINGRAMA10@gmail.com",
    },
    {
    id: "2",
    name: "o",
    usermane: "KING",
    password: "10",
    email: "KINGRAMA10@gmail.com",
    },
];
export const resolvers = {
    Query:{
        user: (parent, args, context, info) =>{
            return user.filter((user)=> user.id.toString() === args.id)[0];
        },
        users: (parent, args, context, info) =>{
            return user;
        },
    },
};

export const typeDefs = gql`

type User {
    id: ID!
    name: String!
    usermane: String!
    password: String!
    email: String!
  }

  type Query{ 
      user(id:ID!): User
      users:[User]!
  }
`;