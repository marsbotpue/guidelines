import { Typography, Grid,Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export const MuiTypography = () => {
  return (

    <Grid container padding={'8rem 4rem'} spacing={2}>
        <Grid item xs={6} bgcolor={'#1a1a1a'}>
            <Typography variant='h2'>Text One</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='h2'>Text Two</Typography>            
        </Grid>

        <Grid item xs={4}>
            <Card>
            <CardMedia component="img" height="194" image="https://unnuevoespacio.com/wp-content/uploads/2022/09/AnyConv.com__Sala-de-juntas-vista-al-mar-veracruz.webp" alt="Paella dish"/>
                <CardContent>
                    <Typography> Word of the Day</Typography>
                    <Typography variant={'h5'}>benevolent</Typography>
                    <Typography>adjective</Typography>
                    <Typography variant={'body2'}>well meaning and kindly.</Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' href='#'>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={5}>
            <Card >
                <CardContent>
                    <Typography>
                    Word of the Day
                    </Typography>
                    <Typography variant={'h5'}>
                    benevolent
                    </Typography>
                    <Typography>
                    adjective
                    </Typography>
                    <Typography variant={'body2'}>
                    well meaning and kindly.
                    </Typography>
                </CardContent>
                <CardActions>
                <Button variant='contained' href='#'>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={3}>
            <Card >
                <CardContent>
                    <Typography>
                    Word of the Day
                    </Typography>
                    <Typography variant={'h5'}>
                    benevolent
                    </Typography>
                    <Typography>
                    adjective
                    </Typography>
                    <Typography variant={'body2'}>
                    well meaning and kindly.
                    </Typography>
                </CardContent>
                <CardActions>
                <Button variant='contained' href='#'>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>

  )
}
