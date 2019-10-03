import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createUser} from '../actions';
import './style.css';

class Form extends React.Component{
    renderInput({label, input, meta}){
        return(
            <div className="form-div">
                <div className="form-group row form-field">
                    <label className="col-sm-4">{label}</label>
                    <div className="col-sm-8">
                        <input type={`${input.name==='Password' ?'password':'text'}`} style={{width: '100%'}} {...input} autoComplete="off"/>
                        <div className={`${meta.touched === true ? 'show' : 'clear'}`}>{meta.error}</div>
                    </div>
                </div>
            </div>    
        );
    }
    onSubmit = (data) => {
        this.props.createUser(data);
        alert("User Signed in successfully");
    }
    render(){
        return(
            <div className="form">
                <h2 className="form-head">Sign Up</h2>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form-body">
                    <Field name="Name" label="Name" component={this.renderInput}/>
                    <Field name="Email" label="Email" component={this.renderInput}/>
                    <Field name="Password" label="Password" component={this.renderInput}/>
                    <Field name="ContactNo" label="Contact No." component={this.renderInput}/>
                    <div style={{width: '100%', textAlign: 'center'}}><button className="btn btn-primary submit-btn">Submit</button></div>
                </form>
            </div>
        );
    }
}

const validate = (data) => {
    const errors = {};
    if(!data.Name){
        errors.Name = 'Please enter your Name.'
    }
    if(!data.Email){
        errors.Email = 'Please enter your email'
    }
    if(!data.Password){
        errors.Password = 'Please Enter your Password.'
    }
    if(!data.ContactNo){
        errors.ContactNo="Please enter your contact no."
    }
    return errors;
}
const formWrapped = reduxForm({
    form: 'loginForm',
    validate
})(Form);

export default connect(null, {createUser})(formWrapped);