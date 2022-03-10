import { engine } from '@svb-41/engine'

export type ControllerArgs<Data = any> = engine.control.ControllerArgs<Data>
export type Controller<Data = any> = engine.control.Controller<Data>
export type BulletControllerArgs<Data = any> = engine.control.BulletControllerArgs<Data>
export type BulletController<Data = any> = engine.control.BulletController<Data>
export type NextShipInstruction<Data = any> = engine.control.NextShipInstruction<Data>
export type NextBulletInstruction<Data = any> = engine.control.NextBulletInstruction<Data>

export type Instruction = engine.control.Instruction
export type Idle = engine.control.Idle
export type Turn = engine.control.Turn
export type Thrust = engine.control.Thrust
export type Fire = engine.control.Fire

export const Instruction = engine.control.INSTRUCTION
export const idle = engine.control.idle
export const turn = engine.control.turn
export const thrust = engine.control.thrust
export const fire = engine.control.fire

export type ControlPanel = engine.control.ControlPanel
export type BulletControlPanel = engine.control.BulletControlPanel
