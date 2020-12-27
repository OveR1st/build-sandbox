import Log from './log.js';
import Calc from './calc.js';

const calc = new Calc();
const log = new Log();

log.log(calc.add(1,2,3));
