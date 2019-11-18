import React, {useState, useEffect} from 'react'
import Header from '../../component/header/Header'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import Loading from '../Loading'
import {useHistory} from 'react-router-dom'

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

function VoteHimpunan() {
  const classes = useStyles()
  const [valueData, setValue] = useState('female')
  const [data, setData] = useState(null)
  let history = useHistory()
  const login = JSON.parse(localStorage.getItem('_p'))

  useEffect(() => {
    async function fetchData() {
      const dpm = await axios(
        `http://localhost:8000/api/v1/get-paslon-${login[0].jenis_himp}`,
      )

      setData(dpm.data.data)
    }

    fetchData()
  }, [])

  if (data === null || !data) {
    return <Loading />
  }

  const handleChange = event => {
    setValue(event.target.value)
  }
  const handleSubmit = () => {
    console.log(valueData)
    localStorage.setItem('himpunan', valueData)
    history.push('/home')
  }

  return (
    <div>
      <Header />
      <Container>
        <div
          style={{
            flexDirection: 'row',
            display: 'table',
            clear: 'both',
          }}
        >
          {data.map((value, i) => {
            return (
              <Card className={classes.card} key={i}>
                <CardHeader
                  title={value.no_paslon}
                  style={{textAlign: 'center'}}
                />
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={value.foto}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='h2'
                      style={{textAlign: 'center'}}
                    >
                      {value.nama_paslon}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  style={{alignItems: 'center', justifyContent: 'center'}}
                >
                  <Radio
                    checked={valueData === value.nama_paslon}
                    onChange={handleChange}
                    value={value.nama_paslon}
                    name={value.nama_paslon}
                    inputProps={{'aria-label': 'A'}}
                  />
                </CardActions>
              </Card>
            )
          })}
          <Card className={classes.card}>
            <CardHeader title={0} style={{textAlign: 'center'}} />
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image=''
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'
                  style={{textAlign: 'center'}}
                >
                  GOLPUT
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{alignItems: 'center', justifyContent: 'center'}}
            >
              <Radio
                checked={valueData === 'GOLPUT'}
                onChange={handleChange}
                value={'GOLPUT'}
                name={'GOLPUT'}
                inputProps={{'aria-label': 'A'}}
              />
            </CardActions>
          </Card>
        </div>
        <Button
          variant='contained'
          className={classes.voting}
          onClick={handleSubmit}
        >
          Pilih Cuyy
        </Button>
      </Container>
    </div>
  )
}

export default VoteHimpunan
