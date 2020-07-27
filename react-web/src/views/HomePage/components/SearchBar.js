import React from "react";
import {Button, Card, Form, Input} from "antd";
import {connect} from "react-redux";
import {searchUser} from "../../../state/actions";
import "../HomePage.css";


const SearchBar = (props) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        props.searchUser(values)
    };
    return (
        <Card className="form-card">
            <h1 className="search-title">Twitter Search</h1>
            <Form
                labelCol={{span: 4}}
                labelAlign="left"
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Location"
                    name="Location"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button className='submit-button' type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        searchUser: (value) => dispatch(searchUser(value))
    }
};


export default connect(null, mapDispatchToProps)(SearchBar);
