import * as React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import appLogo1 from '../../assets/images/appLogo1.png';

const pages = ['Amalgame', 'Wiki', 'Shop', 'Infos']

class Header extends React.Component {
  render() {
    return  <div>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h1" color="inherit">
                    <img src={appLogo1} alt='appLogo'/>
                  </Typography>

                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={()=> window.location.href = '/' + page.toLowerCase()}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                      >
                        {page}
                      </Button>
                    ))} 
                </Toolbar>
              </AppBar>
            </div>
  }
}

export default Header