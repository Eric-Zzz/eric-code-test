import React from "react";
import FormLayout from "./components/SearchBar";
import ShowList from "./components/UserList";


const HomePage = () =>
    (
        <div>
            <FormLayout/>
            <ShowList/>
        </div>
    );


export default HomePage;
