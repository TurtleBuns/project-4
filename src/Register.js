import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

axios.get('https://red-wdp-api.herokuapp.com/api/mars/jobs')
.then((response) =>
console.log(response.data));

const Register = () => (
    <form id='register-container'>
        <h1 id='register-header'>Register</h1>
        <input type='text' placeholder='Name'></input>
        <input type='number'placeholder='Age'></input>
        <select>

        </select>
        <h1 id='register-checkin'><Link to="/encounters"> Check in</Link></h1>
    </form>
)

export default Register