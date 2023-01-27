/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { Actions } from './store/reducer'

function TableHeader() {
  const { dispatch, state } = useContext(TableContext)
  const { columns, data, sortColumn, sortDirection } = state

  const handleSort = (column) => {
    const dataArray = Object.values(data)
    const sortedData = dataArray.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortColumn] > b[sortColumn] ? 1 : -1
      }
      return a[sortColumn] < b[sortColumn] ? 1 : -1
    })
    if (sortColumn === column) {
      dispatch({
        type: Actions.SET_SORT_DIRECTION,
        payload: sortDirection === 'asc' ? 'desc' : 'asc',
      })
      dispatch({ type: Actions.SET_SORT_COLUMN, payload: column })
    } else {
      dispatch({ type: Actions.SET_SORT_COLUMN, payload: column })
      dispatch({ type: Actions.SET_SORT_DIRECTION, payload: 'asc' })
    }
    dispatch({ type: Actions.SET_DATA, payload: sortedData })
  }

  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) => (
            <TableCell
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort(col.id)}
              as="th"
              key={col.id}
            >
              {col.label}{' '}
              {sortColumn === col.id
                ? sortDirection === 'asc'
                  ? '▲'
                  : '▼'
                : ''}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader
