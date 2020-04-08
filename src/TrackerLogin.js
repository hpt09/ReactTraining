import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { Label } from 'react-bootstrap';
import { LanguageContext } from './context/LanguageContext';

class Login extends React.Component {
    constructor(){
        super();
        this.state = { name: '', password: ''}
        this.nameRef = React.createRef()
        this.pwdRef = React.createRef()
    }           
    handleLogin = (e) => {
        e.preventDefault();
        if((this.nameRef.current.value=="") || (this.pwdRef.current.value==""))
		{ 
            alert("Please enter details"); 
        }
        else
        { 
            this.props.history.replace('/home/'); 
        }
    }
    render(){
        return (
          <LanguageContext.Consumer>{(context)=>{
            const {language} = context
            return (
        <React.Fragment>
          <h1 style={{'textAlign':'center'}}>Defect Tracker</h1>
                    <form onSubmit={this.handleLogin} style={{textAlign:'center'}}>
                        <br/><h2>Login</h2><br/>
                        <div className="form-group"  >
                          <label>
                            Username:
                            </label>
                            <input type = "text" 
                            style={{width:'40%',margin:'auto'}}className="form-control" ref={this.nameRef} name="name" 
				            placeholder = "UserName" 
				        /><br/><br/>
                        </div>
                        <div className="form-group">
                          <label>
                            Password:
                            </label>
                            <input type = "password" 
                            name="password" 
                            style={{width:'40%',margin:'auto'}}
                            ref={this.pwdRef}className="form-control"
                            placeholder = "Password"
                        /><br/><br/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>	
                    </form>
                </React.Fragment>
                 )
                }}</LanguageContext.Consumer>
                );
               }
}
export default Login;
