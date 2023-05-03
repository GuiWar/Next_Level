import { customElement, FASTElement } from '@microsoft/fast-element';
import { HomeTemplate as template } from './home.template';
import { HomeStyles as styles } from './home.styles';

const name = 'home-route';

@customElement({
  name,
  template,
  styles,
})
export class Home extends FASTElement {
  constructor() {
    super();
  }

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
