import { html, ref} from '@microsoft/fast-element';
import { ExampleChart } from './example-chart/example-chart';
import type { Home } from './home';
import { InsertTradesForm } from './insert-trades-form/insert-trades-form';
import { PositionsGrid } from './positions-grid/positions-grid';
import { TradesGrid } from './trades-grid/trades-grid';

// Need to call custom element constructors to register them as custom elements
ExampleChart;
InsertTradesForm;
PositionsGrid;
TradesGrid;

export const HomeTemplate = html<Home>`
  <zero-layout auto-save-key="tutorial-app-layout-key" ${ref('layout')}>
    <zero-layout-region type="horizontal">
      <zero-layout-region type="vertical">
        <zero-layout-item title="Position Grid">
          <positions-grid></positions-grid>
        </zero-layout-item>
        <zero-layout-item title="Trades Grid">
          <trades-grid></trades-grid>
        </zero-layout-item>
      </zero-layout-region>
      <zero-layout-region type="vertical">
        <zero-layout-item title="Trades Form">
          <insert-trades-form></insert-trades-form>
        </zero-layout-item>
        <zero-layout-item title="Chart">
          <example-chart></example-chart>
        </zero-layout-item>
      </zero-layout-region>
    </zero-layout-region>
  </zero-layout>
`;