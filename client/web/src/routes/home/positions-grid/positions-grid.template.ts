import { html, repeat } from '@microsoft/fast-element';
import { positionColumnDefs } from '../positionColumnDefs';
import { PositionsGrid } from './positions-grid';

export const positionsGridTemplate = html<PositionsGrid>`
  <template>
    <zero-grid-pro persist-column-state-key="position-grid-settings">
      <grid-pro-genesis-datasource
        resource-name="ALL_POSITIONS"
      ></grid-pro-genesis-datasource>
      ></grid-pro-genesis-datasource>
      ${repeat(
        () => positionColumnDefs,
        html`
          <grid-pro-column :definition="${(x) => x}"></grid-pro-column>
        `
      )}
    </zero-grid-pro>
  </template>
`;