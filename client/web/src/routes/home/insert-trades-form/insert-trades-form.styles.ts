import { css } from "@microsoft/fast-element";
import { mixinScreen } from '../../../styles';

export const insertTradesFormStyles = css`
  :host {
    ${mixinScreen('flex')}
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .column-split-layout {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }

  .row-split-layout {
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 100%;
    height: 50%;
  }
`;
