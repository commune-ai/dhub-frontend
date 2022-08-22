import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.algovera.ai/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
