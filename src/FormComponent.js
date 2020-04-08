import React from 'react';
import TextInput from './TextInput';
import 'bootstrap/dist/css/bootstrap.min.css';
class FormComponent extends React.Component {
    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.nameRef.value)
        alert("Welcome " + this.nameRef.value);
    }
    render() {
        return(<React.Fragment>
            <form onSubmit={this.handleLogin}>
               <TextInput nameRef={input => this.nameRef = input}/><br/><br/>
               <button type="submit" className="btn btn-primary">Login</button>
           </form>
        </React.Fragment>)
    }
}
export default FormComponent;
