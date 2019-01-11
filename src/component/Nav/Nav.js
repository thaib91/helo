import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

function Nav(props) {
    // console.log(props)
    const{username, profile} = props;
    console.log(username)
    return (
        <div className="navFunction">
            Nav
            {/* <Link to=''> <button></button></Link> */}
            {/* {username} */}
            {/* {profile} */}
            {/* {userId} */}
            <Link to='/dashboard'> <button>Home</button></Link>
            <Link to='/new'> <button>New Post</button></Link>
            <Link to='/'> <button>Logout</button></Link>
            {/* <h3>{[username]}</h3> */}
            {/* <h3>{profile}</h3> */}
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    const {username, profile, userId} = reduxState;

    return{
        username,
        profile,
        userId
    }
};

export default connect(mapStateToProps)(Nav);