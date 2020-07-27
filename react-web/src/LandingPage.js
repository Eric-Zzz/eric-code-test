import React from "react";
import {Layout} from "antd";
import {Route, Router, Switch} from "react-router-dom";
import Loadable from "react-loadable";
import history from "./history";
import "./LandingPage.css";

const {Header, Content, Footer} = Layout;

const loading = () => <div>Loading...</div>;
// HomePage
const HomePage = Loadable({
    loader: () => import("./views/HomePage/HomePage"),
    loading,
});

// ProfilePage
const ProfilePage = Loadable({
    loader: () => import("./views/ProfilePage/ProfilePage"),
    loading,
});

// Notice
const ErrorNotice = Loadable({
    loader: () => import("./views/ErrorNotice"),
    loading,
});

const LandingPage = () => (
    <Layout className="layout">
        <Router history={history}>
            <Header className="header">
                <div className="logo">Twitter Search</div>
            </Header>
            <Content className="content">
                <div className="site-layout-content">
                    <ErrorNotice/>
                    <Switch>
                        <Route path="/profile" component={ProfilePage}/>
                        <Route path="/" name="HomePage" component={HomePage}/>
                    </Switch>
                </div>
            </Content>
            <Footer className="footer">
                <div>Made by: Eric Zhao</div>
            </Footer>
        </Router>
    </Layout>
);

export default LandingPage;
