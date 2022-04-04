import { engine } from '@svb-41/engine'

export type Message<Data = any> = engine.comm.Message<Data>
export type Comm<Data = any> = engine.control.Comm<Data>

/** Communication channel. Accept messages and let read them through history. */
export type Channel<Data = any> = engine.comm.Channel<Data>

/** Communication channel. Accept messages and let read them through history. */
export const Channel = engine.comm.Channel
