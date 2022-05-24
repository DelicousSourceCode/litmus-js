// @ts-check
/**
 * @author DelicousSourceCode
 */
// const { Unit } = require('./lib/params')
/**
 * @typedef {'mass'|'volume'|'density'|'length'|'area'|'force'|'pressure'|'work/energy'|'power'} Unit
 */
/**
 * 
 * @param {number} value 
 * @param {Unit} unit 
 * @param {boolean} round 
 * @param {boolean} useUnit 
 * @returns {string|number}
 */
function toMetric(value, unit, round = false, useUnit = false) {
  let conversion
  switch (unit) {
    case 'mass':
      conversion = value / 2.20
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} kg`
    break
    case 'length':
      conversion = value / 3.28
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} m`
    break
    case 'area':
      conversion = value / 10.76
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} m²`
    break
    case 'volume':
      conversion = value / 35.32
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} m³`
    break
    case 'density':
      conversion = value * 1.73
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} g/m³`
    break
    case 'force':
      conversion = value * 4.45
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} N`
    break
    case 'force':
      conversion = value * 4.45
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} N/cm²`
    break
    case 'pressure':
      conversion = value * 1.45
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} N/cm²`
    break
    case 'work/energy':
      conversion = value / 1.36
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} J`
    break
    case 'power':
      conversion = value / 1.36
      if (round == true) return Math.round(conversion)
      if (useUnit == true) return `${conversion} J`
    break
    default:
      throw new Error('ERROR: Unit type must be passed as parameter')
  }
}