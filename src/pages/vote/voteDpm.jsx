import React from 'react'
import Header from '../../component/header/Header'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    float: 'left',
    padding: '0 10px',
    margin: 10,
  },
  media: {
    height: 299.22,
  },
  voting: {
    margin: theme.spacing(1),
    height: 60,
    borderRadius: 4,
    backgroundColor: '#282A74',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Strasua',
    fontStyle: 'regular',
    width: '94%',
  },
}))

function VoteDpm() {
  const classes = useStyles()
  const noPaslon = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [valueData, setValue] = React.useState('female')

  const handleChange = event => {
    setValue(event.target.value)
  }
  return (
    <div>
      <Header />
      <Container>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            display: 'table',
            clear: 'both',
          }}
        >
          {noPaslon.map((value, i) => {
            return (
              <Card className={classes.card} key={i}>
                <CardHeader title={value} style={{textAlign: 'center'}} />
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://asset.kompas.com/crops/1QaPmoutMRJJNULjRYfSB0XPrjk=/0x0:999x666/750x500/data/photo/2019/10/21/5dada6a9e701c.jpg'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='h2'
                      style={{textAlign: 'center'}}
                    >
                      Prabowo
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  style={{alignItems: 'center', justifyContent: 'center'}}
                >
                  <FormControl
                    component='fieldset'
                    className={classes.formControl}
                  >
                    <RadioGroup
                      aria-label='gender'
                      name='gender1'
                      value={valueData}
                      onChange={handleChange}
                    >
                      <FormControlLabel value='female' control={<Radio />} />
                    </RadioGroup>
                  </FormControl>
                </CardActions>
              </Card>
            )
          })}
        </div>
        <Button variant='contained' className={classes.voting}>
          Pilih Cuyy
        </Button>
      </Container>
    </div>
  )
}

export default VoteDpm
