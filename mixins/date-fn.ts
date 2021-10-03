import Component from 'nuxt-class-component'
import Vue from 'vue'
import {
  addDays,
  addHours,
  addMilliseconds,
  addMinutes,
  addMonths,
  addSeconds,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  format,
  startOfDay,
  subDays,
  subHours,
  subMilliseconds,
  subMinutes,
  subMonths,
  subSeconds,
  toDate,
} from '~/utils/date'

@Component
export class DateFn extends Vue {
  formatDate = format
  toDate = toDate
  diffInCalendarDays = differenceInCalendarDays
  diffInCalendarMonths = differenceInCalendarMonths
  startOfDay = startOfDay

  subMonths = subMonths
  subDays = subDays
  subHours = subHours
  subMinutes = subMinutes
  subSeconds = subSeconds
  subMilliseconds = subMilliseconds

  addMonths = addMonths
  addDays = addDays
  addHours = addHours
  addMinutes = addMinutes
  addSeconds = addSeconds
  addMilliseconds = addMilliseconds
}

export default DateFn
