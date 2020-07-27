import React from "react";
import {connect} from "react-redux";
import {notification} from "antd";
import {errorType} from "../state/reducers/error";


const ErrorNotice = (props) => {
        const openNotificationWithIcon = (type, message) => {
            notification[type]({
                message: message,
                description:
                    'Opps! Please try it later.',
            });
            props.cleanNotice()
        };
        return (
            <div>
                {props.isNoticed === 1 ?
                    openNotificationWithIcon('error', props.errorMessage)
                    :
                    <div/>
                }
            </div>
        )
    }
;

const mapStateToProps = state => {
    return {
        errorMessage: state.error.message,
        isNoticed: state.error.isNoticed
    };
};
const mapDispatchToProps = dispatch => {
    return {
        cleanNotice: () => dispatch({type: errorType.CLEAN_NOTICE})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ErrorNotice);

