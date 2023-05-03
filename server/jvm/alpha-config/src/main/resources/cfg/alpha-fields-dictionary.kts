/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide fields config for multi-pro-code-test.
 *
 * Modification History
 */

fields {
    // Trade
    field(name = "ENTERED_BY", type = STRING)
    field(name = "PRICE", type = DOUBLE)
    field(name = "QUANTITY", type = LONG)
    field(name = "REFERENCE_PX", type = STRING)
    field(name = "REFERENCE_QTY", type = DOUBLE)
    field(name = "SIDE", type = STRING)
    field(name = "SYMBOL", type = LONG)
    field(name = "TRADE_DATE", type = DATE)
    field(name = "TRADE_DATETIME", type = DATETIME)
    field(name = "TRADE_ID", type = STRING)
    field(name = "TRADE_STATUS", type = ENUM("NEW", "ALLOCATED", "CANCELLED", default = "NEW"))

    // Position
    field(name = "POSITION_ID", type = STRING)
    field(name = "QUANTITY", type = LONG) // total number of shares
    field(name = "VALUE", type = DOUBLE) // position qty multiplied by avg trade price
    field(name = "NOTIONAL", type = DOUBLE) // instrument price multiplied by quantity
    field(name = "PNL", type = DOUBLE) // difference between notional and current market price

    // Company
    field(name = "COMPANY_NAME", type = STRING)
    field(name = "COMPANY_LOCATION", type = STRING)

    // Instrument
    field(name = "INSTRUMENT_ID", type = STRING)
    field(name = "INSTRUMENT_SYMBOL", type = STRING)
    field(name = "CURRENCY_ID", type = STRING)

    // Counterparty
    field(name = "COUNTERPARTY_NAME", type = STRING)
    field(name = "COUNTERPARTY_ID", type = STRING)
}