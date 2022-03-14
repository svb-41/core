import { engine } from '@svb-41/engine'

export type Ship = engine.ship.Ship
export type Position = engine.ship.Position
export type Stats = engine.ship.Stats
export type Bullet = engine.ship.Bullet
export type RadarResult = engine.ship.RadarResult

export const SHIP_CLASS = engine.ship.SHIP_CLASS

/** Generates the next position of the position. */
export const position = engine.ship.position
