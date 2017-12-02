import { ChartApiModel } from '../model/chart-api.model';
import { Double } from '../model/series-data.model';
const initData = [
  new Double,
  new Double,
  new Double,
  new Double,
  new Double,
  new Double,
  new Double,
  new Double,
  new Double,
  new Double,
  new Double,
  new Double
]
initData[0].name = 'Jan';
initData[1].name = 'Feb';
initData[2].name = 'Mar';
initData[3].name = 'Apr';
initData[4].name = 'May';
initData[5].name = 'Jun';
initData[6].name = 'Jul';
initData[7].name = 'Aug';
initData[8].name = 'Sep';
initData[9].name = 'Oct';
initData[10].name = 'Nov';
initData[11].name = 'Dec';
initData[0].x = 0;
initData[1].x = 1;
initData[2].x = 2;
initData[3].x = 3;
initData[4].x = 4;
initData[5].x = 5;
initData[6].x = 6;
initData[7].x = 7;
initData[8].x = 8;
initData[9].x = 9;
initData[10].x = 10;
initData[11].x = 11;
export const ChartDefault2: ChartApiModel = {
  chart: {
    backgroundColor: null,
    style: {
      color: '#000'
    },
  },
  colors: {

  },
  credits: {
    enabled: false
  },
  data: {

  },
  exporting: {

  },
  labels: {

  },
  legend: {

  },
  plotOptions: {

  },
  series: [{
      data: initData,
      type: 'line',
      name: 'Default Series 2 - 1'
  }, {
      data: initData,
      type: 'bar',
      name: 'Default Series 2 - 2'
  }, {
      data: initData,
      type: 'line',
      name: 'Default Series 2 - 3'
  },
  ],
  subtitle: {

  },
  title: {
    text: 'Default Title 2',
    style: {
      color: '#000'
    }
  },
  tooltip: {

  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      style: {
        color: '#000'
      }
    },
    title: {
      style: {
        color: '#000'
      }
    }
  },
  yAxis: {
    labels: {
      style: {
        color: '#000'
      }
    },
    title: {
      style: {
        color: '#000'
      }
    }
  },
  zAxis: {

  }
}
