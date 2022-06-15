import React from 'react'
import * as S from './styles'
import Checkbox  from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';

interface MetodosCheckbox {
  label: string
  checked: boolean
  setChecked: (isChecked: boolean) => void
}

function CheckboxComponent({label,checked, setChecked}: MetodosCheckbox) {

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(target.checked);
  };

  

  
  return (
    <S.ContainerCheckbox>
      <FormControlLabel
        label={label}
        sx={{
          color: '#E7E7E7',
        }}        
        
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            sx={{
              color: '#B8B8B8',
              '&.Mui-checked': {
                color: '#00F2B1',
              },
            }}
          />
        }
      />
    </S.ContainerCheckbox>
  )
}


export default CheckboxComponent