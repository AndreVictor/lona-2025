import { createClient, cacheExchange, fetchExchange } from '@urql/core';

export const urqlClient = createClient({
  url: 'https://wp.mostra-lona.com.br/graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {},
  },
});