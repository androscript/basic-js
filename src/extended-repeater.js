import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let result = [];
  let tempResult = [];
  str = String(str);
  if ('addition' in options) {
    let addition = String(options.addition);
    if ('additionRepeatTimes' in options) {
      if (options.additionRepeatTimes > 1) {
        for (let j = 1; j <= options.additionRepeatTimes; j++) {
          tempResult.push(addition);
        };
        if ('additionSeparator' in options) {
          str = str + tempResult.join(options.additionSeparator);
        } else {
          str = str + tempResult.join('|');
          };
      } else {
        str = str + addition;
      };
    } else {
      str = str + addition;
    }; 
  };
  if ('repeatTimes' in options) {
    if (options.repeatTimes > 1) {
      for (let i = 1; i <= options.repeatTimes; i++) {
        result.push(str);
      };
      if ('separator' in options) {
        result = result.join(options.separator);
      } else {
        result = result.join('+');
        };
    } else {
        result = str;
    };
  } else {
      result = str;
    }; 
  return result;
}
