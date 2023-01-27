import React, { useContext } from 'react'
import { FlexBox } from '../../../../styles'
// eslint-disable-next-line import/named
import { Button } from '../../../atoms'
import { TableContext } from '../store/context'

function PrevNextPage() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, limit, data } = state

  const pages = Math.ceil(data?.length / limit)

  const handlePrevPage = () => {
    dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage - 1 })
  }

  const handleNextPage = () => {
    dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage + 1 })
  }

  return (
    <FlexBox direction="row" gap="5px" align="center">
      <Button disabled={currentPage === 1} onClick={handlePrevPage}>
        {'<'}
      </Button>
      <span>
        Página {currentPage} de {pages}
      </span>
      <Button disabled={currentPage === pages} onClick={handleNextPage}>
        {'>'}
      </Button>
    </FlexBox>
  )
}

export default PrevNextPage
