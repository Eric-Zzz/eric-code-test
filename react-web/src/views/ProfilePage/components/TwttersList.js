import React from "react";
import {List, Avatar} from "antd";
import {connect} from "react-redux";
import '../ProfilePage.css'


const TwttersList = (props) =>
    (
        <div>
            {props.tweets ?
                <List
                    itemLayout="horizontal"
                    dataSource={props.tweets}
                    renderItem={tweet => (
                        <List.Item
                            className='list-item'
                            key={tweet.id}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={tweet.user.profile_image_url}/>}
                                title={<a className='user-name'>{tweet.user.name}</a>}
                                description={'@' + tweet.user.screen_name}
                            />
                            {tweet.text}
                        </List.Item>
                    )}
                />
                :
                <div/>
            }
        </div>
    )
;

const mapStateToProps = state => {
    return {
        tweets: state.user.lastFiveTweets
    };
};

export default connect(mapStateToProps, null)(TwttersList);

