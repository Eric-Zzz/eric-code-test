import React from "react";
import {connect} from "react-redux";
import {Skeleton, Card, Avatar,} from 'antd';
import '../ProfilePage.css'

const {Meta} = Card;


const UserProfile = (props) =>
    (
        <div>
            {props.user ?
                <Card
                    className='user-profile-card'
                    actions={[
                        <a className='following'>{props.user.friends_count} Following</a>,
                        <a className='followers'>{props.user.followers_count} Followers</a>
                    ]}
                >
                    <Skeleton loading={false} avatar active>
                        <Meta
                            avatar={
                                <Avatar src={props.user.profile_image_url}/>
                            }
                            title={<a className='card-user-name' href={props.user.url}
                                      target="_blank">{props.user.name}</a>}
                            description={'@' + props.user.screen_name}
                        />
                    </Skeleton>
                </Card>
                :
                <div className='loading'>Loading...</div>
            }
        </div>
    )
;

const mapStateToProps = state => {
    return {
        user: state.user.selectedUser
    };
};


export default connect(mapStateToProps, null)(UserProfile);

