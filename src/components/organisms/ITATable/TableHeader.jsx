/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { Actions } from './store/reducer'

function TableHeader() {
  const { dispatch, state } = useContext(TableContext)
  const { columns, sortColumn, sortDirection } = state

  const handleSort = (column, sort) => {
    dispatch({
      type: Actions.SET_SORT,
      payload: {
        sortDirection,
        sortColumn: column,
        sortable: sort,
      },
    })
  }

  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) => (
            <TableCell
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort(col.id, col.sort)}
              as="th"
              key={col.id}
            >
              {col.label}{' '}
              {sortColumn === col.id && col.sort
                ? sortDirection === 'asc'
                  ? '▼'
                  : '▲'
                : ''}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader
