import React, {useState} from 'react'
import LoginImage from '../assets/login.png'
import fakultas from '../assets/fakultas.png'
import pemira from '../assets/pemira.png'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import qs from 'querystring'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 800,
  },
  login: {
    margin: theme.spacing(1),
    height: 60,
    borderRadius: 4,
    backgroundColor: '#282A74',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Strasua',
    fontStyle: 'regular',
    fontSize: 32,
    width: 800,
  },
}))

function Login() {
  const [loading, setLoading] = useState(false)
  const [change, setChange] = useState({
    username: '',
    password: '',
  })
  const classes = useStyles()

  let history = useHistory()

  const handleChange = name => event => {
    setChange({...change, [name]: event.target.value})
  }

  const handleSubmit = () => {
    const requestBody = {
      username: change.username,
      password: change.password,
    }
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
    setLoading(true)
    axios
      .post(
        'http://kinamotif.com/backend/api/v1/login',
        qs.stringify(requestBody),
        config,
      )
      .then(result => {
        // Do somthing
        console.log(result.status)
        localStorage.setItem('_p', JSON.stringify(result.data.data))
        history.push('/home')
      })
      .catch(err => {
        // Do somthing
        console.log(err)
      })
  }

  return (
    <div style={{flexDirection: 'row', display: 'flex'}}>
      <div style={{flex: 1, backgroundColor: '#282A74'}}>
        <div style={{flexDirection: 'row', display: 'flex', margin: 20}}>
          <div style={{flex: 1}}>
            <img src={fakultas} alt='terimakasih' />
          </div>
          <div>
            <img src={pemira} alt='terimakasih' />
          </div>
        </div>
        <center>
          <img src={LoginImage} alt='terimakasih' style={{display: 'block'}} />
        </center>
      </div>
      <div
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: '15%',
          marginLeft: '5%',
        }}
      >
        <h1 style={{color: '#FF2272', fontSize: 52}}>Login</h1>
        <div style={{flex: 1}}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Username'
            margin='normal'
            variant='outlined'
            fullWidth
            name='username'
            onChange={handleChange('username')}
          />
        </div>
        <div>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Password'
            margin='normal'
            variant='outlined'
            placeholder='password'
            type='password'
            fullWidth
            name='password'
            onChange={handleChange('password')}
          />
        </div>

        <Button
          variant='contained'
          className={classes.login}
          onClick={handleSubmit}
          disabled={loading}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
