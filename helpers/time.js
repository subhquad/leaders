import moment from 'moment'

export function getTime(date = new Date()) {
  return moment(date).format('DD MMMM YYYY');
}
export function getTimeHeader(date = new Date()) {
  return moment(date).format('dddd | DD MMMM YYYY');
}
