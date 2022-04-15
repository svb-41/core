import { engine } from '@svb-41/engine'

/** A Ship is identified by an ID (an UUID), and has various stats. team is a color. */
export type Ship = engine.ship.Ship

/** Position of an item in space.
 * It has two coordinates X and Y.
 * Direction is in radians.
 * Speed in number. */
export type Position = engine.ship.Position

/** Stats of a ship.
 * Acceleration is in speed/s.
 * Turn indicates of how much an item can turn by frame.
 * Size indicates the size of the item.
 * Stealth is the value of resistance of the item.
 * Direction is in radians. */
export type Stats = engine.ship.Stats

/** A Bullet is similar to a Ship, except you don’t have control over it. */
export type Bullet = engine.ship.Bullet

/** The result of the radar doesn't contains the distance of the object.
 * You can have the signature of the object in the result.
 * You can have it with sqrt(dist2(self.position, radar.position)). */
export type RadarResult = engine.ship.RadarResult

/** All possible classes for a Ship. */
export const SHIP_CLASS = engine.ship.SHIP_CLASS

/** Generates the next position of the position. */
export const position = engine.ship.position
