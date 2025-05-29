import { createClient, cacheExchange, fetchExchange } from '@urql/core';

export const urqlClient = createClient({
  url: 'https://2025wp.mostra-lona.com.br/graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {},
  },
});