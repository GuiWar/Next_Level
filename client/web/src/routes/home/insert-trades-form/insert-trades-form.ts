import { Connect } from '@genesislcap/foundation-comms';
import { customElement, FASTElement, observable } from '@microsoft/fast-element';
import { insertTradesFormStyles } from './insert-trades-form.styles';
import { insertTradesFormTemplate } from './insert-trades-form.template';

@customElement({
  name: 'insert-trades-form',
  template: insertTradesFormTemplate,
  styles: insertTradesFormStyles,
})
export class InsertTradesForm extends FASTElement {
  @Connect connect: Connect;

  @observable public quantity: string;
  @observable public price: string;
  @observable public instrument: string;
  @observable public side: string = 'BUY';

  @observable tradeInstruments: Array<{ value: string; label: string }>;

  public async connectedCallback() {
    super.connectedCallback();

    const tradeInstrumentsRequest = await this.connect.request('INSTRUMENT');
    this.tradeInstruments = tradeInstrumentsRequest.REPLY?.map((instrument) => ({
      value: instrument.INSTRUMENT_ID,
      label: instrument.INSTRUMENT_ID,
    }));
    this.instrument = this.tradeInstruments[0].value;
  }

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
}