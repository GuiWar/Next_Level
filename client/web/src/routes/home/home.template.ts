import {html,repeat} from '@microsoft/fast-element';
import type {Home} from './home';
import {positionColumnDefs} from './positionColumnDefs';
import {sync} from '@genesislcap/foundation-utils';

export const HomeTemplate = html<Home>`
<div class="row-split-layout">
    <div class="column-split-layout">
        <zero-grid-pro persist-column-state-key="position-grid-settings">
            <grid-pro-genesis-datasource
                resource-name="ALL_POSITIONS"
            ></grid-pro-genesis-datasource>
            ${repeat(
                () => positionColumnDefs,
                html`
                    <grid-pro-column :definition="${(x) => x}"></grid-pro-column>
                `
            )}
            <grid-pro-column :definition="${(x) => x.singlePositionActionColDef}"></grid-pro-column>
        </zero-grid-pro>
    </div>
    <div class="column-split-layout">
        <zero-grid-pro persist-column-state-key="position-grid-settings">
            <grid-pro-genesis-datasource
                resource-name="ALL_TRADES"
            ></grid-pro-genesis-datasource>
        </zero-grid-pro>
    </div>
</div>
<zero-text-field
  :value=${sync(x=> x.quantity)}>
  Quantity
</zero-text-field>
<zero-text-field
  :value=${sync(x=> x.price)}>
  Price
</zero-text-field>
<span>Instrument</span>
<zero-select :value=${sync(x=> x.instrument)}>
  ${repeat(x => x.tradeInstruments, html`
    <zero-option value=${x => x.value}>${x => x.label}</zero-option>
  `)}
</zero-select>
<span>Side</span>
<zero-select :value=${sync(x=> x.side)}>
    <zero-option>BUY</zero-option>
    <zero-option>SELL</zero-option>
</zero-select>
<zero-button @click=${x=> x.insertTrade()}>Add Trade</zero-button>
`;