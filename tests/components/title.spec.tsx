import 'mocha';
import Preact, { h } from 'preact';
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

      it('outputs wrapper with correct className', () => {

         const instance = Enzyme.shallow(<Title />);

         // expect(instance).to.have.length(1);
         expect(instance.hasClass('test')).to.equal(true);

      });

   });


});