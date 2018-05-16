

/* -----------------------------------
 *
 * Vendor
 *
 * -------------------------------- */

import { configure } from 'enzyme';


/* -----------------------------------
 *
 * Adapter
 *
 * -------------------------------- */

var Config = require('enzyme-adapter-preact');


/* -----------------------------------
 *
 * Config
 *
 * -------------------------------- */

configure({ adapter: new Config.Adapter() });