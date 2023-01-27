import React from 'react'
import ItemsPerPage from './ItemsPerPage'
import PrevNextPage from './PrevNextPage'
import { FlexBox } from '../../../../styles'

function Pagination() {
  return (
    <FlexBox
      direction="row"
      justify="space-between"
      align="center"
      style={{ padding: '20px' }}
    >
      <PrevNextPage />
      <ItemsPerPage />
    </FlexBox>
  )
}

export default Pagination
