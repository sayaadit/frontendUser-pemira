import React from 'react'
import LoginImage from '../assets/login.png'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

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
  const classes = useStyles()
  return (
    <div style={{flexDirection: 'row', display: 'flex'}}>
      <div style={{flex: 1, backgroundColor: '#282A74'}}>
        <img
          src={LoginImage}
          alt='terimakasih'
          style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
        />
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
          />
        </div>
        {/* <Link to='/'> */}
        <Button
          onClick={() => alert('eh ngentot')}
          variant='contained'
          className={classes.login}
        >
          Login
        </Button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Login
