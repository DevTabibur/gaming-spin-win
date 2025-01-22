/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMeta {
  limit: number
  page: number
  total: number
}

export type ResponseSuccessType = {
  data: any
  meta?: IMeta
}

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}

export type IGenericErrorMessage = {
  path: string | number
  message: string
}

export interface IError {
  status: number // HTTP status code
  data?: any // Optional, additional data from the response
  message: string // Error message
  success?: boolean // Optional, indicates if the request was successful
  errorMessages?: string[] // Optional, array of error messages
}
