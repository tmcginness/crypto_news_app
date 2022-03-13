import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'x-rapidapi-host': '',
    'x-rapidapi-key': ''
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const CryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fethBaseQuery({ baseurl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})