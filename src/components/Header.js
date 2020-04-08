import React from 'react'; 
import Home from '../components/Home';
import About from '../components/About';
import ContactUs from '../components/Contact';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (<Router>
                    <React.Fragment>
                        <Link to="/wtf">Home</Link> |
                        <Link to="/about"> About Us </Link> |
                        <Link to="/contact"> Contact Us </Link>
                        <Route exact path = "/" component = {Home} />
                        <Route path = "/wtf" component = {Home} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {ContactUs} />
                    </React.Fragment>
                </Router>)
    }
}
export default Header;
