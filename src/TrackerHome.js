import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tracker extends React.Component{
    constructor(){
      super();
      this.state = {
        prior: 1,
        cat: 'UI',
        defects: []
        };
    }
    componentDidMount() {
      this.setState({ isLoading: true });
      axios.get('/defects.json')
      .then(result => 
          this.setState({
              defects: result.data,
              isLoading: false
          })
      )
      .catch(error => 
          this.setState({
              error,
              isLoading: false
          })
      );
  }

    render(){
    
        if(this.state.isLoading) {
          return "Loading..."
      }
      if(this.state.error) {
          return <p>{this.state.error.message}</p>
      }
        
        return(
          // <LanguageContext.Consumer>{(context)=>{
          //   const {language} = context
          //   return (
          <div>
              <div class="outer">
                <h3>Defect Tracker</h3>
                <a href="">Logout</a> <br></br>
                <a href="">Add Defect</a> <a href=""> View Defects</a>
                <div class="inner">
                    <h4>Filter Details</h4>
                    <span>Priority</span> <select><option>{this.state.prior}</option></select> <br></br>
                    <span>Category</span> <select><option>{this.state.cat}</option></select>
                    </div>
                 
                     <h3>Defect Details</h3>
                     <p>Search Results: 3</p>
    
                     <table style={{width:'60%'}} class='table table-bordered' align='center'>
                                
                                    <tr>
                                         <th>Defect Category</th>
                                         <th>Description</th>
                                         <th>Priority</th>
                                         <th>Status</th>
                                         <th>Change Status</th>
                                    </tr>
                                
                                <tbody>
                                     {this.state.defects.map(defect => {
                                           return defect.priority == this.state.prior && 
                                           defect.category == this.state.cat ? (<tr key={Math.random()}>
                                            <td>{defect.category}</td>
                                            <td>{defect.description}</td>
                                            <td>{defect.priority}</td>
                                            <td>{defect.status}</td>
                                            <td><a href = "">Close Defect</a></td>
                                    </tr>) : null
                            })
                                    }
                                </tbody>
                           </table>
    
    
                 </div>
              </div>
        //      )
        //     }}</LanguageContext.Consumer>
        )
      }
    }
    export default Tracker;