import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label, Select, SelectOption } from '../atoms'

const SelectGroupStyled = styled.div``

function SelectGroup({
  label,
  id,
  onChange,
  options = [],
  defaultValue = '',
  defaultText = '',
  hideLabel = false,
  ...rest
}) {
  return (
    <SelectGroupStyled>
      <Label htmlFor={id} hideLabel={hideLabel}>
        {label}
      </Label>
      <Select
        id={id}
        name={id}
        onChange={onChange}
        {...rest}
        defaultValue={defaultValue}
      >
        <SelectOption value="" disabled hidden>
          {defaultText}
        </SelectOption>
        {options.map((option) => (
          <SelectOption value={option.value} key={option.value}>
            {option.text}
          </SelectOption>
        ))}
      </Select>
    </SelectGroupStyled>
  )
}

SelectGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideLabel: PropTypes.bool,
}

export default styled(SelectGroup)``
