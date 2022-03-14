import { helpers, engine } from '@svb-41/engine'

export type TurnToTarget = helpers.geometry.TurnToTarget
export type Position = engine.ship.Position

export const PI = helpers.geometry.PI
export const TWO_PI = helpers.geometry.TWO_PI

/** Computes the distance between two positions.
 * Use it only if you really need something precise.
 * Because of geometry, dist requires a call to Math.sqrt, which is costly.
 * Use dist2 if you can handles squared values. */
export const dist = engine.ship.dist

/** Computes the square of the distance between the two positions.
 * Useful when you need to compute quickly a distance to check collisions
 * for example. */
export const dist2 = engine.ship.dist2

/** Returns the n-th position. */
export const nextPosition = helpers.geometry.nextPosition

/** Returns the angle between the source and the target, in radians.
 * The result is comprised between 0 and 2π. */
export const angle = helpers.geometry.angle

/** Position the ship in direction of the target.
 * delay can be set to try to forecast the position of the target
 * and position at that place.
 * For instance, if an enemy ship is going straight, you can forecast the
 * future move and position the ship accordingly.
 * delay defaults to 1. */
export const turnToTarget = helpers.geometry.turnToTarget

/** Position the ship in direction of the target, and shoot if the target is in
 * the fire range. The fire range is determined by the threshold. If
 * angle(ship, target) is below the threshold, the fire range is fulfilled.
 * threshold defaults to 0.1.
 * delay can be set to try to forecast the position of the target
 * and position at that place.
 * For instance, if an enemy ship is going straight, you can forecast the
 * future move and position the ship accordingly.
 * delay defaults to 1.
 * weapon can also be set to a number, corresponding to the index of the weapon
 * you want to use. */
export const aim = helpers.geometry.aim
