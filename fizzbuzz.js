const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZBUZZ = 'fizzbuzz'

/** 
 * Returns true when n is divisible by d 
 * @param {Number} n
 * @returns {Boolean} fizziness 
 * */
function isFizzy(n, d) {
  return n % d === 0
}

/**
 * Returns true when n is divisible by d
 * @param {Number} n 
 * @returns {Boolean} buzziness
 */
function isBuzzy(n, d) {
  return n % d === 0
}

/**
 * Returns FIZZ, BUZZ, or FIZZBUZZ when a number is divisible by 3, 5, or both
 * @param {Number} n
 * @returns {String} '', 'FIZZ', 'BUZZ', or 'FIZZBUZZ'
 */
function fizzyBuzzy(n, d1, d2) {
  let result = ''
  if (isFizzy(n, d1)) { result += FIZZ }
  if (isBuzzy(n, d2)) { result += BUZZ }
  return result
}

/**
 * Generates a results object describing a sequence of fizz buzz for count.
 * @param {Number} count 
 * @returns {Object} with properties count, fizz, buzz, and fizzbuzz
 */
function fizzBuzz(count, fizzOn=3, buzzOn=5) {
  let result = { count, fizz: 0, buzz: 0, fizzBuzz: 0 }
  for (let i = 1; i <= count; i += 1) {
    const str = fizzyBuzzy(i, fizzOn, buzzOn)
    switch(str) {
      case FIZZ: 
        result.fizz += 1
        break
      case BUZZ: 
        result.buzz += 1
        break
      case FIZZBUZZ:
        result.fizzBuzz += 1
        break
    }
  }
  console.log(result)
  return result
}

module.exports.isFizzy = isFizzy
module.exports.isBuzzy = isBuzzy
module.exports.fizzyBuzzy = fizzyBuzzy
module.exports.fizzBuzz = fizzBuzz
module.exports.FIZZ = FIZZ
module.exports.BUZZ = BUZZ
module.exports.FIZZBUZZ = FIZZBUZZ

