import { customElement, FASTElement } from '@microsoft/fast-element';
import { positionsGridTemplate } from './positions-grid.template';

@customElement({
  name: 'positions-grid',
  template: positionsGridTemplate,
})
export class PositionsGrid extends FASTElement {
  public singlePositionActionColDef = {
    headerName: 'Action',
    minWidth: 120,
    maxWidth: 120,
    cellRenderer: 'action',
    cellRendererParams: {
      actionClick: async (rowData) => {
        console.log(rowData);
      },
      actionName: 'Print',
      appearance: 'primary-gradient',
    },
    pinned: 'right',
  };
}