/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide table definition config for multi-pro-code-test.
 *
 * Modification History
 */

tables {
    table (name = "TRADE", id = 11000, audit = details(id = 11002, sequence = "TR")) {
        sequence(TRADE_ID, "TR")
        INSTRUMENT_ID not null
        COUNTERPARTY_ID not null
        QUANTITY not null
        SIDE not null
        PRICE not null
        TRADE_DATETIME
        ENTERED_BY
        TRADE_STATUS

        primaryKey {
            TRADE_ID
        }
    }

    table(name= "POSITION", id = 11001) {
        sequence(POSITION_ID, "PS")
        INSTRUMENT_ID not null
        QUANTITY
        NOTIONAL
        VALUE
        PNL

        primaryKey {
            POSITION_ID
        }

        indices {
            unique {
                INSTRUMENT_ID
            }
        }
    }

    table( name = "COUNTERPARTY", id = 11003) {
        COUNTERPARTY_ID
        COUNTERPARTY_NAME

        primaryKey {
            COUNTERPARTY_ID
        }
    }

    table (name = "INSTRUMENT", id = 11004) {
        INSTRUMENT_ID
        INSTRUMENT_SYMBOL
        CURRENCY_ID

        primaryKey {
            INSTRUMENT_ID
        }
    }
}