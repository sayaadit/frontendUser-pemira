import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import qs from 'querystring'

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

function RekapHasil(props) {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  let history = useHistory()
  const login = JSON.parse(localStorage.getItem('_p'))
  console.log(login)

  const handleSubmit = () => {
    let bem = 'GOLPUT'
    let dpm = 'GOLPUT'
    let himpunan = 'GOLPUT'

    if (props.bem !== null) {
      bem = props.bem
    } else if (props.dpm !== null) {
      dpm = props.dpm
    } else if (props.himpunan !== null) {
      himpunan = props.himpunan
    }
    const requestBody = {
      suara_bem: bem,
      suara_dpm: dpm,
      suara_himpunan: himpunan,
    }
    console.log(requestBody)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
    setLoading(true)
    axios
      .put(
        `http://kinamotif.com/backend/api/v1/${login[0].username}/vote`,
        qs.stringify(requestBody),
        config,
      )
      .then(result => {
        // Do somthing
        localStorage.removeItem('dpm')
        localStorage.removeItem('bem')
        localStorage.removeItem('himpunan')
        localStorage.removeItem('_p')
        console.log(result.data.data)
        history.push('/')
      })
      .catch(err => {
        // Do somthing
        console.log(err)
      })
  }

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
        <tr>
          <td>
            <h1>Vote DPM </h1>
          </td>
          <td>
            <h1>:</h1>
          </td>
          <td>
            <h1>{props.dpm}</h1>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Vote Himpunan </h1>
          </td>
          <td>
            <h1>:</h1>
          </td>
          <td>
            <h1>{props.himpunan}</h1>
          </td>
        </tr>
      </table>
      <Button
        variant='contained'
        className={classes.logout}
        onClick={handleSubmit}
        disabled={loading}
      >
        Submit
      </Button>
    </div>
  )
}

export default RekapHasil
