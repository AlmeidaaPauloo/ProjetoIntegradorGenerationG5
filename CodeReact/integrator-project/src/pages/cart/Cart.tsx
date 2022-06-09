import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useLocalStorage from "react-use-localstorage";
import './Cart.css';


function Cart() {  
    return(
    <>

        <Grid item xs={12} className="page" alignItems= 'center' justifyContent='center' style={{
            backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover',
            
        }}>
            {/* NAVBAR */}
            <div className="navbarmenu">
                <IconButton edge="start" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    MENU
                </Typography>
                <div className="navbarbutton">
                    <Link to='/Login'>
                        <button>Login </button>
                    </Link>
                        <button>Cadastre-se</button>
                </div>
            </div>
            
            <div className="title">
                <h3>CARRINHO</h3>
            </div>

            
        </Grid>
    </>
    )
}
export default Cart;