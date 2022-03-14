import { engine } from '@svb-41/engine'

export type Message<Data = any> = engine.comm.Message<Data>
export type Channel<Data = any> = engine.comm.Channel<Data>
export type Comm<Data = any> = engine.control.Comm<Data>

export const Channel = engine.comm.Channel
