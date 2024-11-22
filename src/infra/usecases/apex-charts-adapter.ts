import ApexCharts from 'apexcharts'
import { IChartGeneratorLib } from '@/data/protocols/ichart-generator-lib'
import { IChartModel } from '@/domain/usecases/chart-generator'

export class ApexChartsAdapter implements IChartGeneratorLib {
  async generateChart (data: IChartModel): Promise<void> {
    const options = {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      fill: {
        type: 'solid'
      },
      colors: [data.data[data.data.length - 1] >= data.data[data.data.length - 2] ? 'rgb(46, 224, 46)' : 'rgb(221, 36, 36)'],
      yaxis: {
        show: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [
        {
          name: 'value',
          data: data.data
        }
      ],
      xaxis: {
        categories: data.categories,
        labels: { show: false }
      },
      grid: {
        show: false
      }
    }
    const chart = new ApexCharts(document.querySelector(data.element), options)
    await chart.render()
  }
}
