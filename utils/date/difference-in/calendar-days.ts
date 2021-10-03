import getTimezoneOffsetInMilliseconds from '~/utils/get-timezone-offset-in-milliseconds'
import { MILLISECONDS_IN_DAY } from '../add/days'
import { startOfDay } from '../start-of'

export const differenceInCalendarDays = (
  dtLeft: Date | number,
  dtRight: Date | number
): number => {
  const startOfDayLeft = startOfDay(dtLeft)
  const startOfDayRight = startOfDay(dtRight)

  const timestampLeft =
    startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft)
  const timestampRight =
    startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight)

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

export default differenceInCalendarDays
