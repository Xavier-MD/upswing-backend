<<<<<<< HEAD
105,109,112,111,114,116,32,123,32,114,101,112,108,97,99,101,32,125,32,102,114,111,109,32,39,108,111,100,97,115,104,39,59,10,105,109,112,111,114,116,32,110,117,109,101,114,97,108,32,102,114,111,109,32,39,110,117,109,101,114,97,108,39,59,10,10,47,47,32,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,10,10,101,120,112,111,114,116,32,102,117,110,99,116,105,111,110,32,102,67,117,114,114,101,110,99,121,40,110,117,109,98,101,114,41,32,123,10,32,32,114,101,116,117,114,110,32,110,117,109,101,114,97,108,40,110,117,109,98,101,114,41,46,102,111,114,109,97,116,40,78,117,109,98,101,114,46,105,115,73,110,116,101,103,101,114,40,110,117,109,98,101,114,41,32,63,32,39,36,48,44,48,39,32,58,32,39,36,48,44,48,46,48,48,39,41,59,10,125,10,10,101,120,112,111,114,116,32,102,117,110,99,116,105,111,110,32,102,80,101,114,99,101,110,116,40,110,117,109,98,101,114,41,32,123,10,32,32,114,101,116,117,114,110,32,110,117,109,101,114,97,108,40,110,117,109,98,101,114,32,47,32,49,48,48,41,46,102,111,114,109,97,116,40,39,48,46,48,37,39,41,59,10,125,10,10,101,120,112,111,114,116,32,102,117,110,99,116,105,111,110,32,102,78,117,109,98,101,114,40,110,117,109,98,101,114,41,32,123,10,32,32,114,101,116,117,114,110,32,110,117,109,101,114,97,108,40,110,117,109,98,101,114,41,46,102,111,114,109,97,116,40,41,59,10,125,10,10,101,120,112,111,114,116,32,102,117,110,99,116,105,111,110,32,102,83,104,111,114,116,101,110,78,117,109,98,101,114,40,110,117,109,98,101,114,41,32,123,10,32,32,114,101,116,117,114,110,32,114,101,112,108,97,99,101,40,110,117,109,101,114,97,108,40,110,117,109,98,101,114,41,46,102,111,114,109,97,116,40,39,48,46,48,48,97,39,41,44,32,39,46,48,48,39,44,32,39,39,41,59,10,125,10,10,101,120,112,111,114,116,32,102,117,110,99,116,105,111,110,32,102,68,97,116,97,40,110,117,109,98,101,114,41,32,123,10,32,32,114,101,116,117,114,110,32,110,117,109,101,114,97,108,40,110,117,109,98,101,114,41,46,102,111,114,109,97,116,40,39,48,46,48,32,98,39,41,59,10,125,10
=======
import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}
>>>>>>> 11f8d26b9cbc1f943374e296d21630174137d5da
