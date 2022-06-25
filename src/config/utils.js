export const filterOnlyNumber = value => value.replace(/[^0-9\.]/g, "")
export const sleep = (ms = 1000) => new Promise.all(e => setTimeout(e, ms))
export const firstCapital = string =>
  string.charAt(0).toUpperCase() + string.slice(1)
export const decimalFormat = num => Math.round(num * 10) / 10
export const calculateBeefQurban = (totalWeight = 0, karkas = 0) => {
  if (totalWeight <= 0 || karkas <= 0) {
    return
  }

  let meat = decimalFormat(karkas * (70 / 100))
  let innards = decimalFormat(karkas * (10 / 100))
  let head = decimalFormat(totalWeight * (4 / 100))
  let tail = decimalFormat(totalWeight * (0.7 / 100))
  let foot = 4.5

  return {
    totalWeight,
    karkas,
    meat,
    innards,
    head,
    tail,
    foot,
  }
}

export const calculateMuttonQurban = totalWeight => {
  if (totalWeight <= 0) {
    return
  }

  let karkas = decimalFormat(totalWeight * (41 / 100))
  let meat = decimalFormat(karkas * (75 / 100))
  let redInnards = decimalFormat(totalWeight * (6.11 / 100))
  let greenInnards = decimalFormat(totalWeight * (13.6 / 100))
  return {
    totalWeight,
    karkas,
    meat,
    redInnards,
    greenInnards,
  }
}
