import {html,repeat} from '@microsoft/fast-element';
import type {Home} from './home';
import {positionColumnDefs} from './positionColumnDefs';

export const HomeTemplate = html<Home>`
<zero-grid-pro only-template-col-defs persist-column-state-key='position-grid-settings'>
    <grid-pro-genesis-datasource
        resource-name="ALL_POSITIONS"
    ></grid-pro-genesis-datasource>
    ${repeat(() => positionColumnDefs, html`
                <grid-pro-column :definition="${x => x}"></grid-pro-column>
                `)}
    <grid-pro-column :definition="${x => x.singlePositionActionColDef}"></grid-pro-column>
</zero-grid-pro>
`;