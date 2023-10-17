import * as React from 'react';
import { AppBar, MenuItem, Toolbar, Typography } from '@mui/material'
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
                    <MenuItem key={page}>
                      {page}
                    </MenuItem>
                  ))}
                </Toolbar>
              </AppBar>
            </div>
  }
}

export default Header