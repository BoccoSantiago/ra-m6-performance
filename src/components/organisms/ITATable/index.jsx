/* eslint-disable react/prop-types */
/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { useEffect, useContext, useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import { Button } from '../../atoms'
import { FlexBox } from '../../../styles'
import EmptyTable from './EmptyTable'
import { Pagination } from './pagination'

function Table({ columns, data, showHeader = true, loading }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  const tableRef = useRef(null)

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Table',
    sheet: 'Table',
  })

  return (
    <div>
      <div style={{ padding: '10px' }}>
        <FlexBox direction="row" justify="flex-end" gap="5px" align="center">
          <Button>Viviendas</Button>
          <Button>Por Barrio</Button>
          <Button onClick={onDownload}>Descargar</Button>
        </FlexBox>
      </div>
      {loading ? (
        <TableStyled>
          <EmptyTable />
        </TableStyled>
      ) : (
        <TableStyled ref={tableRef}>
          {showHeader && <TableHeader />}
          <TableBody />
        </TableStyled>
      )}
      <Pagination />
    </div>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

export default ITATable
