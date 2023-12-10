import { Box, Button, Card } from "@mui/material";
import './cardShop.css'

export function equip(backgroundNumber) {
    const backgroundStorage = "background" + backgroundNumber;
    let i = 1;
    for (i; i <= 11; i++) {
        if (localStorage.getItem("background" + i) == 'equip') {
            localStorage.setItem("background" + i, 'buy');
        }
    }
    localStorage.setItem(backgroundStorage, "equip");
    window.location.reload();
}

export function buy(backgroundNumber) {
    const backgroundStorage = "background" + backgroundNumber;
    const currentRupeeBalance = localStorage.getItem("rupeeBalance");
    const backgroundPrice = 50;
    if (localStorage.getItem("rupeeBalance") >= backgroundPrice) {
        localStorage.setItem('rupeeBalance',currentRupeeBalance - backgroundPrice);
        localStorage.setItem(backgroundStorage, "buy");
    }
    else{
        alert("Not enough rupees");      
    }
    window.location.reload();
}

export default function cardShop(props) {
    return <Box sx={{
        width: 1/4,
        backgroundColor: '#38170F',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '2%'
    }}>
        
        <img src={require(`../../../assets/images/background${props.number}.png`)} class="background"></img>
    <Box sx={{
        height:50,
        backgroundColor: '#38170F',
        color:'white',
    }}>
        <div id="textCardShop">Name : {props.name}<br/>Price : {props.price}</div>
        {localStorage.getItem("background" + props.number) == "equip"?
            <div id="buyButton"><Button color="success" variant="contained" >Used</Button></div>:
            localStorage.getItem("background" + props.number) == "buy"?
            <div id="buyButton"><Button color="info" variant="contained" onClick={() => equip(props.number)}>Equip</Button></div>:
            <div id="buyButton"><Button color="error" variant="contained" onClick={() => buy(props.number)}>Buy</Button></div>
        }
        </Box>
</Box>
}
