// Header.js

import React from 'react';
import { Button, Toolbar, Typography } from '@mui/material';
import appLogo1 from '../../assets/images/appLogo1.png';
import './header.css';
import rubis from "../../assets/images/rubis.png";
import { useNavigate } from 'react-router-dom';

const pages = ['Amalgame', 'Wiki', 'Shop', 'Infos'];

export default function Header({rupeeBalance}) {
  const navigate = useNavigate();

  function handleClick(page) {
    navigate('/' + page.replace('amalgame', ''));
  }

  return (
    <div className='sticky-appbar'>
      <Toolbar className='appbarbg'>
        <Typography variant='h1'>
          <img src={appLogo1} alt='appLogo' />
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleClick(page.toLowerCase())}
              sx={{ my: 2, color: 'white', display: 'block', fontSize: 20 }}
              id={(window.location.pathname.replace('/', '') === page.toLowerCase()) || (window.location.pathname === '/' && page.toLowerCase()) === 'amalgame' ? 'current-page' : ''}
            >
              {page}
            </Button>
          ))}
        </div>
        <Typography variant='body1' style={{ fontSize: 20, marginLeft: '10px', color: 'white', marginLeft: 'auto' }}>
          Rupees : {rupeeBalance}
        </Typography>
        <img id="rubis" src={rubis} alt="Rubis" />
      </Toolbar>
    </div>
  );
}
