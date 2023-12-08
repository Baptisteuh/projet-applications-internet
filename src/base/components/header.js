import * as React from 'react';
import { Button, Toolbar, Typography } from '@mui/material'
import appLogo1 from '../../assets/images/appLogo1.png';
import './header.css'
import { useNavigate } from "react-router-dom";

const pages = ['Amalgame', 'Wiki', 'Shop', 'Infos']

export default function Header() {
  const navigate = useNavigate();

  function handleClick(page) {
    navigate("/" + page.replace("amalgame",""));
  }

    return  (<div>
                <Toolbar className='appbarbg'>
                  <Typography variant="h1">
                    <img src={appLogo1} alt='appLogo'/>
                  </Typography>

                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={()=> handleClick(page.toLowerCase())}
                        sx={{ my: 2, color: 'white', display: 'block', fontSize: 20}}
                      >
                        {page}
                      </Button>
                    ))}
                </Toolbar>
            </div>)
}