import { IChartGenerator, IChartModel } from '@/domain/usecases/chart-generator'
import { IChartGeneratorLib } from '../protocols/ichart-generator-lib'

export class ChartGenerator implements IChartGenerator {
  constructor (private readonly chartGenerator: IChartGeneratorLib) {}
  async generateChart (data: IChartModel): Promise<void> {
    await this.chartGenerator.generateChart(data)
  }
}
