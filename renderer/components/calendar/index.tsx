import Calendar from 'rsuite/Calendar'

import { renderCell } from './cell'


const cellClassName = date => {
  return date.getDay() % 2 ? 'c-bg-g' : '';
}
// TODO: Configurable Calendar.

const ReactiveCalendar = () => {
  return (
    <Calendar
      bordered
      renderCell={renderCell}
      cellClassName={cellClassName}
      isoWeek={true}
    />
  )
}

export default ReactiveCalendar