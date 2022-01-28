import { Paper } from '@mui/material';
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

function DataContainer({datas,deleteData}) {
  return (<div>
      {datas.length > 0 &&
            <Paper className="m-auto w-10/12 p-10 " variant="outlined" square>
              {datas.map((data, key) => (
                <div className="mb-5" key={key}>
                  <div className="grid justify-items-end">
                    <div className="flex flex-row space-x-2">
                      <ColorButton onClick={() => deleteData(data.name)}>
                        Delete
                      </ColorButton>
                    </div>
                  </div>
                  <h1 className="text-black">{data.name}</h1>
                  <div className="border-2 border-gray-800 w-12/12 h-fit p-2 flex flex-row ">
                    {data.data.map((d, k) => (
                      <div>
                        <div
                          key={k+key}
                          className={`${
                            d.status ? `bg-green-500` : `bg-orange-500`
                          } h-10 w-1 mr-0.5`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Paper>
          } 
  </div>);
}

export default DataContainer;
