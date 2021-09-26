import crypto from 'crypto';
import { DEVELOPMENT } from '../constants/common';

const cryptoRandom = (min: number, max: number): number => {
  return crypto.randomInt(min, max + 1);
};

const showConsoleTableSlot = (symbols: any[][]) => {
  if (!DEVELOPMENT)
    return;

  console.table([{ 0: '     ', 3: symbols[1][0].name, 7: symbols[2][0].name, X1: '     ' }]);
  console.table([{ 0: symbols[0][0].name, 4: symbols[1][1].name, 8: symbols[2][1].name, 11: symbols[3][0].name }]);
  console.table([{ 1: symbols[0][1].name, 2: '     ', 3: '     ', 12: symbols[3][1].name }]);
  console.table([{ 2: symbols[0][2].name, 5: symbols[1][2].name, 9: symbols[2][2].name, 13: symbols[3][2].name }]);
  console.table([{ 0: '     ', 6: symbols[1][3].name, 10: symbols[2][3].name, X1: '     ' }]);
}

export default {
  cryptoRandom,
  showConsoleTableSlot
};