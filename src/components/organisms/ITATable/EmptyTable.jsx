import React from 'react'
import { TableCell } from './styles'

function EmptyTable() {
  const columns = [
    {
      id: 'title',
      label: 'Nombre',
    },
    {
      id: 'price',
      label: 'Precios',
    },
    {
      id: 'district',
      label: 'Barrio',
    },
    {
      id: 'city',
      label: 'Ciudad',
    },
    {
      id: 'type',
      label: 'Tipo',
    },
  ]

  const data = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
    {
      id: '10',
    },
  ]

  return (
    <>
      <thead>
        <tr>
          {columns.map((col) => (
            <TableCell as="th" key={col.id}>
              {col.label}
            </TableCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            {columns.map((col) => (
              <TableCell key={`${d.id}-${col.id}`} />
            ))}
          </tr>
        ))}
      </tbody>
    </>
  )
}

export default EmptyTable
