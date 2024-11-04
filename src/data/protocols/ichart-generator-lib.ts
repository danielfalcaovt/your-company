import { IChartModel } from '@/domain/usecases/chart-generator'

export interface IChartGeneratorLib {
  generateChart: (data: IChartModel) => Promise<void>
}
