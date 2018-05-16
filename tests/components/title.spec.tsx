import { h } from 'preact';
import { Enzyme } from '../config';
import { expect } from 'chai';


/* -----------------------------------
 *
 * Component
 *
 * -------------------------------- */

import { Title } from '../../src/components/title';


/* -----------------------------------
 *
 * Title
 *
 * -------------------------------- */

describe('Components -> <Title />', () => {


   /*
    * this.render()
    */
   describe('.render()', () => {

      afterEach(() => {

         // TODO

      });

      it('outputs an <h1> element', () => {

         const value = 1;

         expect(value).to.equal(1);

      });

   });


});