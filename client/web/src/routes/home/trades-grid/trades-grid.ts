import { customElement, FASTElement } from '@microsoft/fast-element';
import { tradesGridTemplate } from './trades-grid.template';

@customElement({
  name: 'trades-grid',
  template: tradesGridTemplate,
})
export class TradesGrid extends FASTElement {}