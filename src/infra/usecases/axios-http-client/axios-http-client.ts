/* eslint-disable @typescript-eslint/return-await */
import {
  HttpResponse,
  IHttpClient,
  IHttpClientParams
} from '@/infra/protocols/http-client'
import axios from 'axios'

export class AxiosHttpClient implements IHttpClient {
  async get (params: IHttpClientParams): Promise<HttpResponse> {
    try {
      const result = await axios.get(params.url, params.values)
      return new Promise((resolve) =>
        resolve({
          statusCode: result.status,
          body: result.data
        })
      )
    } catch (error: any) {
      if (error.response) {
        return new Promise(resolve => resolve({
          statusCode: error.response.status,
          body: error.response.data
        }))
      } else {
        console.log(error)
        throw error
      }
    }
  }
}
