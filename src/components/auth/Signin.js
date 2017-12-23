import React, { Component } from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import * as actions from "../../actions";
class Signin extends Component {

  handleFormSubmit({email, password}) {
    console.log(email, password);
    this.props.signinUser({email, password});
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
        type="text" />
      </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

export default connect(null, actions)(
  reduxForm({
  form: "signin",
  fields: ["email", "password"]
  })(Signin)
);
