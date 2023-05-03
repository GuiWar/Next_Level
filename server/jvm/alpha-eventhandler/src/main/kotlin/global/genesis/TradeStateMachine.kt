package global.genesis

import com.google.inject.Inject
import global.genesis.commons.annotation.Module
import global.genesis.db.rx.entity.multi.AsyncEntityDb
import global.genesis.db.statemachine.StateMachine
import global.genesis.db.statemachine.Transition
import global.genesis.gen.dao.Trade
import global.genesis.gen.dao.enums.TradeStatus

@Module
class TradeStateMachine @Inject constructor(
    db: AsyncEntityDb
) {
    private val internalState: StateMachine<Trade, TradeStatus, TradeEffect> = db.stateMachineBuilder {
        readState { tradeStatus }

        state(TradeStatus.NEW) {
            // Trade fields can be changed when status is NEW
            isMutable = true

            initialState(TradeEffect.New) {
                onValidate { trade ->
                    if (trade.isTradeIdInitialised && trade.tradeId.isNotEmpty()) {
                        verify {
                            db hasNoEntry Trade.ById(trade.tradeId)
                        }
                    }
                }
            }

            onCommit { trade ->
                if (trade.enteredBy == "TestUser") {
                    trade.price = 10.0
                }
            }

            transition(TradeStatus.ALLOCATED, TradeEffect.Allocated)
            transition(TradeStatus.CANCELLED, TradeEffect.Cancelled)
        }

        state(TradeStatus.ALLOCATED) {
            // Trade fields cannot be changed when status is ALLOCATED
            isMutable = false

            transition(TradeStatus.CANCELLED, TradeEffect.Cancelled)
        }

        state(TradeStatus.CANCELLED) {
            // Trade fields cannot be changed when status is CANCELLED
            isMutable = false
        }
    }

    suspend fun insert(trade: Trade): Transition<Trade, TradeStatus, TradeEffect> = internalState.create(trade)

    suspend fun modify(tradeId: String, modify: suspend (Trade) -> Unit): Transition<Trade, TradeStatus, TradeEffect>? =
        internalState.update(Trade.ById(tradeId)) { trade, _ -> modify(trade) }

    suspend fun modify(trade: Trade): Transition<Trade, TradeStatus, TradeEffect>? = internalState.update(trade)
}

sealed class TradeEffect {
    object New : TradeEffect()
    object Allocated : TradeEffect()
    object Cancelled : TradeEffect()
}