import moment from 'moment'
import { refreshNuxtData } from '#imports'

export function findNextIndex(components: any, index: number | false) {
  let found = false
  let newIndex = ((index || 0) + 1) % components.length
  const maxItr = components.length
  let count = 0
  while (found === false && count < maxItr) {
    if (
      (components[newIndex].scheduler.days === null || components[newIndex].scheduler.days === undefined || components[newIndex].scheduler.days.includes(Number(moment().format('E'))))
      && (components[newIndex].scheduler.timeFrom === null || components[newIndex].scheduler.timeFrom === undefined || moment().isAfter(moment(components[newIndex].scheduler.timeFrom || moment(), 'hh:mm')))
      && (components[newIndex].scheduler.timeTo === null || components[newIndex].scheduler.timeTo === undefined || moment().isBefore(moment(components[newIndex].scheduler.timeTo || moment(), 'hh:mm')))
      && (components[newIndex].scheduler.dateFrom === null || components[newIndex].scheduler.dateFrom === undefined || moment().isAfter(moment(components[newIndex].scheduler.dateFrom || moment(), 'DD.MM.YYYY')))
      && (components[newIndex].scheduler.dateTo === null || components[newIndex].scheduler.dateTo === undefined || moment().isBefore(moment(components[newIndex].scheduler.dateTo || moment(), 'DD.MM.YYYY')))
    ) {
      found = true
    }
    else {
      newIndex = (newIndex + 1) % components.length
    }
    count++
  }
  return found ? newIndex : false
}

export function player(components: any, index: number | false, updateIndex: (index: number | false) => void) {
  const loop = setInterval(() => {
    const newIndex = findNextIndex(components, index)
    updateIndex(newIndex)
    if (index === 0 || index === null) {
      refreshNuxtData()
      // window.location.reload()
    }
    clearInterval(loop)
    player(components, newIndex, updateIndex)
  }, components[index || 0].duration * 1000)
}
