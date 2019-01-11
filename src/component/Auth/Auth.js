import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUserInfo} from '../../ducks/reducer'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (prop, value) => {
        // console.log(value); //check what's being input on eventListener
        this.setState({
            [prop]: value
        })
    }

    async login() {
        const {username, password}= this.state;
        const res = await axios.post('/auth/login', {username, password})
        this.props.updateUserInfo(res.data)
    }

    async register() {
        const {username, password} = this.state;
        const res = await axios.post('/auth/register', {username, password});
        console.log(res.data.message)
        this.props.updateUserInfo(res.data)

    }


    render() {
        return (
            <div className="authClass">
                Helo
    
            <p className='username-box'>
                    <span>Username: </span>
                    <input onChange={(e) => this.handleChange('username', e.target.value)} type='text' />
                </p>
                <p className='password-box'>
                    <span>Password: </span>
                    <input onChange={(e) => this.handleChange('password', e.target.value)} type='password' />
                </p>

                <button onClick={() => this.register()}>Register</button>
                <button onClick={() => this.login()}>Login</button>


            </div>
        )
    }
}

export default connect(null, {updateUserInfo})(Auth)
