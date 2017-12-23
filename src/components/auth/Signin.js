import React, { Component } from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import * as actions from "../../actions";

class Signin extends Component {

  handleFormSubmit({email, password}) {
    console.log(email, password);
    this.props.signinUser({email, password}, this.props.history);
  }

  renderField(field){
    return (
      <div>
        <input {...field.input} type={field.type} className="form-control" />
        {field.meta.touched && field.meta.error}
        <span>{field.meta.error}</span>
      </div>
    );
  }

  renderAlert(){
    if(this.props.errorMessage){
      return (<div className="alert alert-danger">
        <strong>Oops!</strong> {this.props.errorMessage}
      </div>);
    }
  }

  render() {
    const {handleSubmit, fields: {email, password}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <Field
          name="email"
          component={this.renderField}
          type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field
          name="password"
          component={this.renderField}
          type="password" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error};
}

export default connect(mapStateToProps, actions)(
  reduxForm({
  form: "signin",
  fields: ["email", "password"]
  })(Signin)
);
