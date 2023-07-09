import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'
import { USER_TAG, COLLECTION_TAG, HOLIDAY_TAG } from 'shared/config'

export const baseApi = createApi({
  tagTypes: [USER_TAG, COLLECTION_TAG, HOLIDAY_TAG],
  reducerPath: '',
  baseQuery: baseQuery,
  endpoints: () => ({}),
})