

/* -----------------------------------
 *
 * Vendor
 *
 * -------------------------------- */

const Enzyme = require('enzyme');
const { Adapter } = require('enzyme-adapter-preact');


/* -----------------------------------
 *
 * Config
 *
 * -------------------------------- */

Enzyme.configure({ adapter: new Adapter() });


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Enzyme };