import { Box, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export default function Wiki() {

    return <Grid container>
                <Grid item xs={2}>
                    <List>
                        <ListItem>
                        <ListItemButton>
                            <ListItemText primary={'Swords'} />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton>
                            <ListItemText primary={'Bows'} />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton>
                            <ListItemText primary={'Shields'} />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton>
                            <ListItemText primary={'Items'} />
                        </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
                <Grid
                    item xs={10}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        backgroundImage: `url(${"../../assets/images/background1.png"})`
                    }}
                >
                    {['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map((text) => (
                        <Box
                            sx={{
                                width: 200,
                                height: 200,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                                '&:active': {
                                    backgroundColor: 'primary.main',
                                    opacity: [1, 1, 1],
                                },
                                margin: '1%',
                                borderRadius: '25px',
                                userSelect: 'none'
                            }}
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                            color={'white'}
                            onClick={() => window.location.href += '/' + text}
                        >
                            {text}
                        </Box>
                    ))}
                </Grid>
            </Grid>
}