import format from 'date-fns/format'
import parse from 'date-fns/parse'
import parseISO from 'date-fns/parseISO'
import Truncate from 'lodash-es/truncate'
import get from 'lodash-es/get'
import orderBy from 'lodash-es/orderBy'
import groupBy from 'lodash-es/groupBy'
import cloneDeep from 'lodash-es/cloneDeep'
import sample from 'lodash-es/sample'
import chunk from 'lodash-es/chunk'

export default (_, inject) => {
  inject('utils', {
    formatDate,
    truncate,
    get,
    orderBy,
    groupBy,
    prettyNumber,
    cloneDeep,
    sample,
    chunk
  })
}

function formatDate(value, dateFormat = 'dd.MM.yyyy') {
  if (value instanceof Date || Object.prototype.toString.call(value) === '[object Date]') {
    return format(value, dateFormat)
  }

  if (!isNaN(value)) {
    const parsed = parse(value, 't', new Date())
    return format(parsed, dateFormat)
  }

  if (typeof value === 'string' && value !== ' - ') {
    return format(parseISO(value), dateFormat)
  }

  return ' - '
}

function truncate(str, length = 100) {
  return Truncate(str, { length })
}

function prettyNumber(input) {
  let output = input

  if (typeof output === 'string') {
    output = parseFloat(output)
  }

  if (typeof output === 'number' && !isNaN(output)) {
    return output.toLocaleString('en-US')
  }

  return input
}
