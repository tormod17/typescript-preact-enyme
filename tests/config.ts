import { JSDOM } from 'jsdom';


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
 * DOM
 *
 * -------------------------------- */

const dom = new JSDOM('<!doctype html><html><body></body></html>');


/* -----------------------------------
 *
 * Setup
 *
 * -------------------------------- */

global['document'] = dom.window.document;
global['window'] = dom.window;


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Enzyme };