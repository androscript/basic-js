import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();
  let long = [0, 2, 4, 6, 7, 9, 11];
  if (day > 31) throw new Error("Invalid date!");
  if (day == 31 && !long.includes(month)) throw new Error("Invalid date!");
  if ((month == 1 && day == 29 && (year % 4 != 0)) || (month == 1 && day > 28 && (year % 4 > 0))) throw new Error("Invalid date!");
  switch(month) {
    case 11:
    case 0:
    case 1:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'fall';
  }
}
