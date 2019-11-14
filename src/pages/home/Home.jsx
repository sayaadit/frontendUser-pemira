import React from 'react'
import Header from '../../component/header/Header'
import RekapHasil from './rekapHasil'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 2),
    width: 411,
    height: 180,
    borderRadius: 24,
    backgroundColor: '#282A74',
    margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
  },
}))

function Home() {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Container>
        <div style={{flexDirection: 'row', display: 'flex'}}>
          <Link to='/vote-DPM'>
            <Paper className={classes.root}>
              <h5
                style={{
                  color: '#fff',
                  fontSize: 52,
                  fontWeight: 'bold',
                  fontFamily: 'Strasua',
                  fontStyle: 'regular',
                  marginTop: 15,
                }}
              >
                Vote DPM
              </h5>
            </Paper>
          </Link>
          <Link to='vote-DPM'>
            <Paper className={classes.root}>
              <h5
                style={{
                  color: '#fff',
                  fontSize: 52,
                  fontWeight: 'bold',
                  fontFamily: 'Strasua',
                  fontStyle: 'regular',
                  marginTop: 15,
                }}
              >
                Vote BEM
              </h5>
            </Paper>
          </Link>
          <Link to='vote-DPM'>
            <Paper className={classes.root}>
              <h5
                style={{
                  color: '#fff',
                  fontSize: 52,
                  fontWeight: 'bold',
                  fontFamily: 'Strasua',
                  fontStyle: 'regular',
                  marginTop: 15,
                }}
              >
                Vote Himpunan
              </h5>
            </Paper>
          </Link>
        </div>

        <RekapHasil />
        <center>
          <h1>
            Create With{' '}
            <a href='#' style={{color: '#DD2E44', textDecoration: 'none'}}>
              &hearts;
            </a>{' '}
            Panitia Perwira 2019
          </h1>
        </center>
      </Container>
    </div>
  )
}

export default Home
