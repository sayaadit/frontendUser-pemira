import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  logout: {
    margin: theme.spacing(1),
    height: 60,
    borderRadius: 4,
    backgroundColor: '#282A74',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Strasua',
    fontStyle: 'regular',
    width: '100%',
  },
}))

const RekapHasil = props => {
  const classes = useStyles()
  return (
    <div>
      <h1>Rekap Hasil Pilih</h1>
      <table>
        <tr>
          <td>
            <h1>Vote Bem </h1>
          </td>
          <td>
            <h1>:</h1>
          </td>
          <td>
            <h1>{props.bem}</h1>
          </td>
        </tr>
      </table>
      <div style={{flexDirection: 'row', display: 'flex'}}>
        <h1 style={{flex: 0.5}}>Vote Bem </h1> <h1 style={{flex: 0.1}}>:</h1>
        <h1>{props.bem}</h1>
      </div>
      <div style={{flexDirection: 'row', display: 'flex'}}>
        <h1 style={{flex: 0.5}}>Vote DPM </h1> <h1 style={{flex: 0.1}}>:</h1>
        <h1>{props.dpm}</h1>
      </div>
      <div style={{flexDirection: 'row', display: 'flex'}}>
        <h1 style={{flex: 0.5}}>Vote Himpunan </h1>
        <h1 style={{flex: 0.1}}>:</h1>
        <h1>{props.himpunan}</h1>
      </div>
      <Link to='/terimakasih'>
        <Button variant='contained' className={classes.logout}>
          Submit
        </Button>
      </Link>
    </div>
  )
}

export default RekapHasil
