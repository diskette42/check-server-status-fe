import { TextField } from '@mui/material';
import React from 'react';
import { Button,  } from '@mui/material'
import { styled } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }))

function Search({webName,webURL,handleChangeWebName,handleChangeWebUrl,addData}) {
  return (
      <div className="p-10 flex flex-row space-x-4 ">
          <TextField
            className=""
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={webName}
            onChange={handleChangeWebName}
          />
          <TextField
            id="outlined-basic"
            label="WebUrl"
            variant="outlined"
            value={webURL}
            onChange={handleChangeWebUrl}
          />
          <ColorButton onClick={addData}>Add</ColorButton>
        </div>
 );
}

export default Search;
