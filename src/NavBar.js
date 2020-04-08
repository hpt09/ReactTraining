import React, { Component } from 'react';
import { ThemeContext } from './context/ThemeContext';
import {withRouter} from 'react-router';
class Navbar extends Component {
    render() {
        console.log(this.props)
        return (
            <ThemeContext.Consumer>{(context)=>{
                const {isLightTheme, light, dark} = context
                const theme = isLightTheme ? light:dark;
                return(
                    <nav style={{background: theme.ui, color:theme.color}}>
                    <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                )
            }}</ThemeContext.Consumer>
        );
    }
}
export default withRouter(Navbar);