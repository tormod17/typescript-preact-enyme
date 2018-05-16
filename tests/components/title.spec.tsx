import 'mocha';
import { h } from 'preact';
import * as sinon from 'sinon';
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


   let sandbox = sinon.createSandbox();


   /*
    * this.render()
    */
   describe('.render()', () => {

      afterEach(() => {

         /* sandbox */
         sandbox.restore();

      });

      it('outputs an <h1> element', () => {

         const instance = Enzyme.shallow(<Title />);

         expect(instance.type()).to.equal('h1');

      });

   });


});