import { customElement, FASTElement, observable } from '@microsoft/fast-element';
import { HomeTemplate as template } from './home.template';
import { HomeStyles as styles } from './home.styles';
import {Connect} from '@genesislcap/foundation-comms';

const name = 'home-route';

@customElement({
  name,
  template,
  styles,
})
export class Home extends FASTElement {
    @observable public quantity: string;
    @observable public price: string;
    @observable public instrument: string;
    @observable public side: string = 'BUY';

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

  constructor() {
    super();
  }
   @Connect connect: Connect;

   public async insertTrade() {
     const insertTradeRequest = await this.connect.commitEvent('EVENT_TRADE_INSERT', {
       DETAILS: {
         COUNTERPARTY_ID: 'GENESIS',
         INSTRUMENT_ID: this.instrument,
         QUANTITY: this.quantity,
         PRICE: this.price,
         SIDE: this.side,
         TRADE_DATETIME: Date.now(),
       },
       IGNORE_WARNINGS: true,
       VALIDATE: false,
     });
   }
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

    @observable tradeInstruments: Array<{value: string, label: string}>;
    public async connectedCallback() {
        super.connectedCallback();

        const tradeInstrumentsRequest = await this.connect.request('INSTRUMENT');
        this.tradeInstruments = tradeInstrumentsRequest.REPLY?.map(instrument => ({value: instrument.INSTRUMENT_ID, label: instrument.INSTRUMENT_ID}));
        this.instrument = this.tradeInstruments[0].value;
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
