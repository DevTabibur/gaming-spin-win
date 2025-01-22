import { tagTypes } from '../tag-types'
import { baseAPI } from './baseApi'

const AuthURL = `/v1/auth`

export const authApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    //** USER LOGIN EXAMPLE API WITH GRAPHQL */
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AuthURL}/login`,
        method: 'POST',
        body: {
          query: `
            mutation UserLogin($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
                user {
                  id
                  name
                  email
                }
              }
            }
          `,
          variables: {
            email: loginData.email,
            password: loginData.password,
          },
        },
      }),

      invalidatesTags: [tagTypes.user],
    }),

    //** Fetch user details using GraphQL query */
    getUser: build.query({
      query: () => ({
        url: `/graphql`,
        method: 'POST',
        body: {
          query: `
            query {
              countries {
                code
                name
                continent {
                  name
                }
              }
            }
          `,
        },
      }),
      providesTags: [tagTypes.user],
    }),
  }),
})

export const { useGetUserQuery, useUserLoginMutation } = authApi
