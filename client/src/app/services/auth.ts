import { User } from '@prisma/client'
import { api } from './api'


export type UserData = Omit<User, "id">
type ReposnseLoginData = User & { token: string }

export const authAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ReposnseLoginData, UserData>({
      query: (userData) => ({
        url: '/user/login',
        method: 'POST',
        body: userData
      })
    }),
    register: builder.mutation<ReposnseLoginData, UserData>({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: userData
      })
    }),
    current: builder.query<ReposnseLoginData, void>({
      query: () => ({
        url: '/user/current',
        method: 'GET'
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authAPI

export const { endpoints: { login, register, current } } = authAPI