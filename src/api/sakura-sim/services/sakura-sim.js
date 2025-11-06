'use strict';

/**
 * sakura-sim service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sakura-sim.sakura-sim');
