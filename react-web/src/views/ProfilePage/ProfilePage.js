import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "antd";
import TwttersList from "./components/TwttersList";
import UserProfile from "./components/UserProfile";
import {cleanUser} from "../../state/actions";
import "./ProfilePage.css";


const ProfilePage = (props) => {
    const onClick = () => {
        props.cleanUser()
    };
    return (
        <div>
            <UserProfile/>
            <TwttersList/>
            <Button className='home-button'
                    type="primary"
                    onClick={onClick}
            ><Link to="/">Back To Home</Link></Button>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        cleanUser: () => dispatch(cleanUser())
    }
};

export default connect(null, mapDispatchToProps)(ProfilePage);

