import * as svb from '@svb-41/engine'

export * as comm from './comm'
export * as geometry from './geometry'
export * as ship from './ship'
export * as radar from './radar'

export type BulletContext<Data = any> = svb.engine.control.BulletContext<Data>
export type BulletController<Data = any> = svb.engine.control.BulletController<Data>
export type ControlPanel = svb.engine.control.ControlPanel
export type BulletControlPanel = svb.engine.control.BulletControlPanel
export type Context<Data = any> = svb.engine.control.Context<Data>
export type AI<Data = any> = svb.engine.control.AI<Data>
export type BulletAI<Data = any> = svb.engine.control.BulletAI<Data>

export type Position = svb.engine.ship.Position
export type Instruction = svb.engine.control.Instruction
export type Idle = svb.engine.control.Idle
export type Turn = svb.engine.control.Turn
export type Thrust = svb.engine.control.Thrust
export type Fire = svb.engine.control.Fire

export const Instruction = svb.engine.control.INSTRUCTION
export const idle = svb.engine.control.idle
export const turn = svb.engine.control.turn
export const thrust = svb.engine.control.thrust
export const fire = svb.engine.control.fire
