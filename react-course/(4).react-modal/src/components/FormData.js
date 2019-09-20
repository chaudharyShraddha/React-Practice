import React from "react";

const FormData = ( props ) => (
    <div>
    <h1>User Registration</h1><hr/>
    <form onSubmit = {props.submit} >
    <div className="form-group">
        <div className="form-group col-md-6">
            { props.Error && 
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                     {props.Error}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
              </div>
            }
        </div>
    </div>
        <div className="form-group">
            <div className="form-group col-md-6">
                <label>User-Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter User Name" 
                    value={props.UserName}
                    onChange={props.ChangeUserName}
                />
            </div>
        </div>
        <div className="form-group">
            <div className="form-group col-md-6">
                <label>Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    value={props.Email}
                    onChange={props.ChangeEmail}
                />
            </div>
        </div>
        <div className="form-group">
            <div className="form-group col-md-6">
                <button className="btn btn-lg btn-dark">Submit</button>
            </div>
        </div>
    </form>
    </div>
);

export default FormData;