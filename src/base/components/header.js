import * as React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import appLogo1 from '../../assets/images/appLogo1.png';
import './header.css'

const pages = ['Amalgame', 'Wiki', 'Shop', 'Infos']

class Header extends React.Component {
  render() {
    return  <div>
                <Toolbar className='appbarbg'>
                  <Typography variant="h1">
                    <img src={appLogo1} alt='appLogo'/>
                  </Typography>

                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={()=> window.location.href = '/' + page.toLowerCase()}
                        sx={{ my: 2, color: 'white', display: 'block', fontSize: 20}}
                      >
                        {page}
                      </Button>
                    ))} 
                </Toolbar>
            </div>
  }
}

export default Header