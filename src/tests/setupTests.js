/* eslint-disable import/no-extraneous-dependencies */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'moment/locale/nl-be';
import numeral from 'numeral';
import 'numeral/locales/nl-be';
import DotEnv from 'dotenv';

numeral.locale('nl-be');

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
  adapter: new Adapter(),
});
