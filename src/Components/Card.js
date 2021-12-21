import { Box,Grid,CardContent, Typography, makeStyles,Card  } from '@material-ui/core'
import React from 'react'
import CountUp from 'react-countup';
const useStyle = makeStyles({
    header: {
        background: '#F5F5F5',
        padding: 10
    }
})

function CardComponent({cardTitle, value, desc, lastUpdate}) {
    const classes = useStyle();
    return (
        <Grid component={Card} style={{margin:20, borderBottom: '10px solid yellow'}}>
        <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary">
{cardTitle}
                </Typography>
            </Box>
            <CardContent>
           < Typography variant="h5">
                    <CountUp start={0} end={value} duration={2} seperator="," />
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    )
}

export default CardComponent
