import { html } from '@microsoft/fast-element';
import { ExampleChart } from './example-chart';

export const exampleChartTemplate = html<ExampleChart>`
  <template>
    <zero-g2plot-chart type="pie" :config=${(x) => x.chartConfiguration}>
        <chart-datasource
        resourceName="ALL_POSITIONS"
        server-fields="INSTRUMENT_ID VALUE"
        isSnapshot
        ></chart-datasource>
    </zero-g2plot-chart>
  </template>
`;