import React, { useState, useRef } from 'react'
import { Button } from '../components/atoms'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container, FlexBox } from '../styles'
import useFetch from '../hooks/useFetch'
import { urls } from '../constants'
import { SelectGroup } from '../components/molecules'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span style={{ color: row.price > 300000 ? 'green' : 'red' }}>
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

const getUrl = (page, limit) => `${urls.houses}?_page=${page}&_limit=${limit}`

function Data() {
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const { data, loading, isError, isSuccess } = useFetch(
    getUrl(currentPage, limit),
  )

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (data.length > 1 && limit <= data.length) setCurrentPage(currentPage + 1)
  }

  return (
    <Body>
      {loading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && (
        <Container style={{ marginTop: '2rem' }}>
          <ITATable columns={columns} data={data} />
          <FlexBox
            direction="row"
            justify="space-between"
            align="center"
            style={{ padding: '20px' }}
          >
            <FlexBox direction="row" gap="5px" align="center">
              <Button onClick={handlePrevPage}>{'<<'}</Button>
              <span>Pagina {currentPage}</span>
              <Button onClick={handleNextPage}>{'>>'}</Button>
            </FlexBox>
            <span>Mostrar</span>
            <SelectGroup
              id="limit"
              label="Mostrar"
              hideLabel
              defaultValue={10}
              options={[10, 25, 50].map((number) => ({
                value: number,
                text: number,
              }))}
              onChange={(e) => setLimit(e.target.value)}
            />
          </FlexBox>
        </Container>
      )}
    </Body>
  )
}

export default Data
