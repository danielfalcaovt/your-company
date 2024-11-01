export interface IHttpClient {
  get: (params: IHttpClientParams) => Promise<HttpResponse>
}

export interface IHttpClientParams {
  url: string
  values?: any
}

export interface HttpResponse {
  statusCode: number
  body?: any
}
