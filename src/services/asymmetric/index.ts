import GameModule from './game';
import PaylineModule from './payline';
import SpinModule from './spin';
import SymbolModule from './symbol';
import ProgressModule from './progress';

export default {
  ...GameModule,
  ...PaylineModule,
  ...SpinModule,
  ...SymbolModule,
  ...ProgressModule
};