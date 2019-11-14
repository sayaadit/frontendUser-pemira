import React from 'react'
import Logo from '../../assets/logo.png'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  logout: {
    margin: theme.spacing(1),
    borderRadius: 4,
    backgroundColor: '#FF2272',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Strasua',
    fontStyle: 'regular',
  },
  ktm: {
    margin: theme.spacing(1),
    borderRadius: 16,
    backgroundColor: '#F5CB1D',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Strasua',
    fontStyle: 'regular',
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <nav
        style={{
          backgroundColor: '#282A74',
          flexDirection: 'row',
          width: '100%',
          display: 'flex',
          height: 65,
        }}
      >
        <div style={{flex: 0.1}} />
        <div style={{flex: 1}}>
          <Link to='/'>
            <img src={Logo} alt='logo' style={{margin: 10}} />
          </Link>
        </div>
        <div style={{flex: 0.2}}>
          <h4
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              margin: 0,
              paddingTop: 15,
            }}
          >
            Halo, Asepbalon
          </h4>
        </div>
        <div style={{flex: 0.2, margin: 0}}>
          <Button variant='contained' className={classes.ktm}>
            Ktm
          </Button>
          <Button variant='contained' className={classes.logout}>
            Logout
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default Header
