import { html } from '@microsoft/fast-element';
import { TradesGrid } from './trades-grid';

export const tradesGridTemplate = html<TradesGrid>`
  <template>
    <zero-grid-pro>
      <grid-pro-genesis-datasource
        resource-name="ALL_TRADES"
      ></grid-pro-genesis-datasource>
    </zero-grid-pro>
  </template>
`;