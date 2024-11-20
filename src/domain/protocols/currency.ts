export interface ICurrency {
  value: string
  pctChange: string
  code: string
  name: string
  lastDays?: ICurrency[]
  timestamp: string
  low: string
  high: string
  variation: string
}
