import React from 'react'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'
import useFetch from '../hooks/useFetch'
import { urls } from '../constants'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span style={{ color: row.price < 300000 ? 'green' : 'red' }}>
        {row.price} €
      </span>
    ),
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

function Data() {
  const { data, loading } = useFetch(urls.houses)

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} loading={loading} />
      </Container>
    </Body>
  )
}

export default Data
