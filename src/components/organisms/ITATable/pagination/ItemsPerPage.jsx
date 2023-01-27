import { useContext } from 'react'
// eslint-disable-next-line import/named
import { SelectGroup } from '../../../molecules'
import { TableContext } from '../store/context'
import { FlexBox } from '../../../../styles'
import { Actions } from '../store/reducer'

function ItemsPerPage() {
  const { dispatch } = useContext(TableContext)

  return (
    <FlexBox
      direction="row"
      align="center"
      justify="flex-end"
      style={{ gap: '1rem' }}
    >
      <SelectGroup
        id="limit"
        label="Mostrar"
        defaultValue={10}
        options={[10, 25, 50].map((number) => ({
          value: number,
          text: number,
        }))}
        onChange={(e) =>
          dispatch({
            type: Actions.SET_LIMIT,
            payload: Number(e.target.value),
          })
        }
      />
    </FlexBox>
  )
}

export default ItemsPerPage
