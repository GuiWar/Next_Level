views {

    view("TRADE_VIEW", TRADE) {

        joins {
            joining(COUNTERPARTY) {
                on(TRADE.COUNTERPARTY_ID to COUNTERPARTY { COUNTERPARTY_ID })
            }
            joining(INSTRUMENT) {
                on(TRADE.INSTRUMENT_ID to INSTRUMENT { INSTRUMENT_ID })
            }
        }

        fields {
            TRADE.allFields()

            COUNTERPARTY.COUNTERPARTY_NAME withPrefix COUNTERPARTY
            INSTRUMENT.INSTRUMENT_SYMBOL withPrefix INSTRUMENT
            INSTRUMENT.CURRENCY_ID withAlias "CURRENCY"

            derivedField("CONSIDERATION", DOUBLE) {
                withInput(TRADE.QUANTITY, TRADE.PRICE) { QUANTITY, PRICE ->
                    QUANTITY * PRICE
                }
            }
        }
    }
}