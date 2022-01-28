import { Button, Fade, Menu, MenuItem } from '@mui/material'
import React, { useEffect } from 'react'
import { ethers } from 'ethers'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../app/userSlice'

function Login({setDatas}) {
  const userAddress = useSelector((state)=> state.user.user)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()

  const provider = new ethers.providers.Web3Provider(window.ethereum)

  useEffect(() => {
    // loginWithMetamask()
  }, [userAddress])

  const loginWithMetamask = async () => {
    const res = await provider.send('eth_requestAccounts', [])
    console.log(res[0])
    dispatch(addUser(res[0]))

    // const signer = provider.getSigner();
    // console.log(signer)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = async () => {
    dispatch(addUser(''))
    setAnchorEl(null)
    setDatas([])
  }
  console.log({userAddress})
  return (
    <div>
      {userAddress ? (
        <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {userAddress}
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={loginWithMetamask}>
          Login
        </Button>
      )}
      <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default Login
