import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

const Profile = (props) => {
    return (
        <div>  
            <button type="button" className="btn btn-lg btn-success" onClick={()=>props.handleName(props.fullName)} >Alert user</button>
            <p > <span>Full name:</span>  {props.fullName}</p>
            <p><span>Profession:</span> {props.profession}</p>
            <p><span>Bio:</span> {props.bio}</p>
            <div>
            {props.children}
            </div>
        </div>
    )
}
Profile.defaultProps = {
    fullName: 'Slim',
    bio:' I\'m student for a software developer',
    profession:'Software developer'
    };

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func.isRequired
} 

export default Profile;
