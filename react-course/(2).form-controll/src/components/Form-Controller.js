import React , { Component } from "react";

class Form_Controll extends Component {
    constructor( props ){
        super( props );

        this.state = {
            userName : "",
            email : "",
            comment : "",
            option : "Javascript"
        }
    }
    changeName = ( e ) => {
        this.setState ({
            userName : e.target.value
        })
    }
    changeEmail = ( e ) => {
        this.setState ({
            email: e.target.value
        })
    }
    changeTextarea = ( e ) => {
        this.setState ({
            comment : e.target.value
        })
    }
    changeOption = ( e ) => {
        this.setState ({
            option : e.target.value
        })
    }
    submitForm = ( e ) => {
        e.preventDefault();
        alert(` userName : ${this.state.userName} \n 
                Email : ${this.state.email} \n
                Comments : ${this.state.comment} \n
                option : ${this.state.option}
            `);
    }
    render(){
        const { userName, email, comment, option } = this.state;
        return(
            <React.Fragment>
                <h2 className="heading mt-3">Form Registration</h2><hr/>
                
                <form onSubmit={this.submitForm} className="mt-4">
                
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">UserName</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Enter UserName" value={userName} onChange={this.changeName} autoFocus/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={this.changeEmail} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Comment</label>
                    <div className="col-sm-6">
                        <textarea className="form-control" placeholder="Add your comments here!." value={comment} onChange={this.changeTextarea} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Select language </label>
                    <div className="col-sm-6">
                    <select value={option} onChange={this.changeOption} className="custom-select">
                        <option>Javascipt</option>
                        <option>Python</option>
                        <option>ASP.Net</option>
                        <option>PHP</option>
                    </select>
                    </div>                    
                </div>

                <div className="form-group row">
                    <button type="submit" className="btn btn-dark col-sm-4 ml-2">Submit</button>
                </div>
                
                </form>
            </React.Fragment>
        )
    }
}

export default Form_Controll;