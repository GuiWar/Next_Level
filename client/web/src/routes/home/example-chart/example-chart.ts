import { customElement, FASTElement, observable } from '@microsoft/fast-element';
import { exampleChartTemplate } from './example-chart.template';

@customElement({
  name: 'example-chart',
  template: exampleChartTemplate,
})
export class ExampleChart extends FASTElement {
  @observable chartConfiguration = {
    width: 800,
    angleField: 'value',
    colorField: 'groupBy',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
      style: {
        fill: 'white',
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
}