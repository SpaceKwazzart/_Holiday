import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { type FetchArgs, type FetchBaseQueryError, type FetchBaseQueryMeta, } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'shared/config/api'

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: BASE_URL,
})