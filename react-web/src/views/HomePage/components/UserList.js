import {Avatar, Button, List} from 'antd';
import React from "react";
import "../HomePage.css";
import {connect} from "react-redux";
import {showUser} from "../../../state/actions";
import history from "../../../history";


const UserList = (props) => {
    const {showUser, userData} = props;
    const onClickMore = async (value) => {
        await showUser(value);
        history.push('/profile')
    };
    return (
        <div>
            {userData ?
                <List
                    itemLayout="horizontal"
                    dataSource={userData}
                    renderItem={item => (
                        <List.Item
                            className='list-item'
                            key={item.id}
                            actions={[
                                <Button className='button-more' onClick={() => onClickMore(item)}
                                        type="link">More</Button>
                            ]}
                        >

                            <List.Item.Meta
                                avatar={<Avatar src={item.profile_image_url}/>}
                                title={<a className='user-name'>{item.name}</a>}
                                description={item.location}
                            />
                            {item.description}
                        </List.Item>
                    )}
                /> : <div/>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userData: state.user.userData
    };
};
const mapDispatchToProps = dispatch => {
    return {
        showUser: (value) => dispatch(showUser(value))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
