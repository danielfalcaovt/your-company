export interface IChartModel {
  data: number[]
  categories: number[]
  element: string
}

export interface IChartGenerator {
  generateChart: (data: IChartModel) => Promise<void>
}
