import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    handleChange = (prop, value) => {
        this.setState({
            [prop]: value
        })
    }

    render() {
        return ( 
            <div className="formClass">
                Form
            </div>
        )
    }
}