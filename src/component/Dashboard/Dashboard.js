import React, {Component} from 'react';
import Switch from 'react-switch';
import axios from 'axios';
// import Checkbox from './Checkbox'

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            search: '',
            checked: false
        }
    }
   
    async getAll(){
        await axios.get('/api/post/userid')

    }

    resetSearch(){

    }

    handleChange = (checked) => {
        this.setState({
            checked
        })
    }

    


    render(){
        console.log(this.state.checked)
        let displayPosts = this.state.posts.map(post => {
            return(
                <div>
                    {displayPosts}
                </div>
            )
        })
        return(
            
            <div className="dashboardClass">
            <br/>
            Dashboard
            <br/>
                <h3>My Posts?</h3>
                <label>
                    <Switch 
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    id='switch'
                    />
                </label>
            <p>
            <input className='search-box' onChange={(e)=>this.searchPosts()}/>
            </p>
            <button className="reset-button">Reset</button>
            {displayPosts}
            
            </div>
        )
    }
}