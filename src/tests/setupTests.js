/* eslint-disable import/no-extraneous-dependencies */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'moment/locale/nl-be';
import numeral from 'numeral';
import 'numeral/locales/nl-be';

numeral.locale('nl-be');

Enzyme.configure({
  adapter: new Adapter(),
});
