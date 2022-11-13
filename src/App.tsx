import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from './Body';
import Footer from './Footer';


function App() {
    return (<>
            <Header titleForHeader={"Header"}/>
            <Body titleForBody={"Body"}/>
            <Footer titleForFooter={"Footer"}/>
        </>
    )
        ;
}

export default App;
