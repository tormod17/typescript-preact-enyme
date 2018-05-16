import * as React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';


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

         const item = mount(<Title />);

         expect(item.find('h1').length).to.equal(1);

      });

   });


});