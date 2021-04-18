import React from "react";
// import Header from "./components/Header/Header";
import Sections from "./Sections/Section";
import Intro from "./Intro/Intro";
import Form from "./Form/Form";


function Home () {
    return(
        <div>
            <Sections />
            <Intro />
            <Form />
        </div>
    )
}

export default Home;