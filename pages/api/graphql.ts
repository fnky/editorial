import { ApolloServer } from "apollo-server-micro";
import { createContext } from "graphql/context";
import { schema } from "graphql/schema";

const server = new ApolloServer({
  context: createContext(),
  schema,
  tracing: process.env.NODE_ENV === "development",
});

interface Config {
  api: {
    externalResolver?: boolean;
    bodyParser?:
      | boolean
      | {
          sizeLimit: string;
        };
  };
}

export const config: Config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql",
});
