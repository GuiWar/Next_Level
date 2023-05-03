import { sync } from '@genesislcap/foundation-utils';
import { html, repeat } from '@microsoft/fast-element';
import { InsertTradesForm } from './insert-trades-form';

export const insertTradesFormTemplate = html<InsertTradesForm>`
  <template>
    <div class="column-split-layout">
      <zero-text-field :value=${sync((x) => x.quantity)}>Quantity</zero-text-field>
      <zero-text-field :value=${sync((x) => x.price)} type="number">Price</zero-text-field>
      <span>Instrument</span>
      <zero-select :value=${sync((x) => x.instrument)}>
        ${repeat(
          (x) => x.tradeInstruments,
          html`
            <zero-option value=${(x) => x.value}>${(x) => x.label}</zero-option>
          `
        )}
      </zero-select>
      <span>Side</span>
      <zero-select :value=${sync((x) => x.side)}>
        <zero-option>BUY</zero-option>
        <zero-option>SELL</zero-option>
      </zero-select>
      <zero-button @click=${(x) => x.insertTrade()}>Add Trade</zero-button>
    </div>
  </template>
`;