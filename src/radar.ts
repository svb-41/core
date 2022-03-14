import * as svb from '@svb-41/engine'

/** Get the enemies detected by the radar.
 * Removes the allies detected by the radar.
 * If options.all is set to true, it will also keep the destroyed ships.
 * options.all is false by default. */
export const closeEnemies = svb.helpers.radar.closeEnemies

/** Get the nearest enemy detected by the radar.
 * If no enemy is found, returns undefined.
 * In case of options, if options.all it can indicates a destroyed ship.
 * options.all is false by default. */
export const nearestEnemy = svb.helpers.radar.nearestEnemy
