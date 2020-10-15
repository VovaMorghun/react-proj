import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
 debugger
    return ( 
        <BrowserRouter>
        <div className = "app-wrapper" >
            <Header />
            <Nav />
           
            <div className="content">
                
                <Route path="/dialogs" render = { () => <Dialogs state = {props.store._state.dialogsPage}
                                                                            dispatch = { props.dispatch}/> } />
                <Route path="/profile" render = { () => <Profile state = {props.store._state.profilePage} 
                                                                            dispatch={props.dispatch}
                                                                            newPostText={props.store._state.newPostText}/> } />
                <Route path="/news" render = { () => <News />}/>
                <Route path="/music" render = { () => <Music />}/>
                <Route path="/settings" render = { () => <Settings />}/>
            </div>
            
        </div>
        </BrowserRouter>
    );

}





export default App;