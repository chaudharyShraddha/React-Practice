import React from 'react';
import ModalOption from "./components/Modal";
import Form from "./components/FormData";

class App extends React.Component {
  constructor( props ){
    super ( props );

    this.state = {
      Error: "",
      UserName: "",
      Email: "",
      isActive : false
    }
  };
  ChangeUserName = ( e ) => {
    this.setState({
      UserName: e.target.value 
    })
  };
  ChangeEmail = ( e ) => {
    this.setState({
      Email: e.target.value 
    })
  };
  onSubmitForm = ( e ) => {
      e.preventDefault();
    if( !this.state.Email || !this.state.UserName ){
      this.setState({
        Error: "Please Enter all fields!"
      });
    }else{
      this.ChangeIsActive();
    }
  }
  ChangeIsActive = () => {
    this.setState ({
      isActive : !this.state.isActive, 
    })
  };
  render() {
    return(
      <div>
        <Form 
          UserName = {this.state.UserName}
          Email = {this.state.Email}
          ChangeUserName = {this.ChangeUserName}
          ChangeEmail = {this.ChangeEmail}
          submit = {this.onSubmitForm}
          Error = {this.state.Error}
        />
        <ModalOption 
          isActive = {this.state.isActive} 
          isClose = {this.ChangeIsActive}
          UserName = {this.state.UserName}
          Email = {this.state.Email}
        />
      </div>
    )
  }
}

export default App;
