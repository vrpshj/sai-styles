import React from 'react';
import './sign-up.styles.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor()
    {
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        console.log("handle sudmit event" + password+ confirmPassword);
        if(password !== confirmPassword)
        {
            alert("Passwords don't match");
            return;
        }
    try{
        const {user}= await auth.createUserWithEmailAndPassword(email,password);
        createUserProfileDocument(user,{displayName});

    }
    catch(error)
    {
            console.error(error);
    }

    }
    handleChange=event=>{
        const{value,name}=event.target;
        this.setState({[name]:value});

    }
    render()
    {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
              <h2 className='title'>I do not have a account</h2>
              <span>Sign up with your email and password</span>
              <form className='sign-up-form'  onSubmit={this.handleSubmit}>
              <TextField variant="outlined" margin="normal" required fullWidth  id="displayName" label="Display Name"  name="displayName" autoComplete="displayName" autoFocus 
                value={displayName} onChange={this.handleChange}/>
                <TextField variant="outlined" margin="normal" required fullWidth type="email" id="email" label="Email Address"  name="email" autoComplete="email"  
                value={email} onChange={this.handleChange}/>
                <TextField variant="outlined" margin="normal" required  fullWidth name="password" label="Password" type="password" id="password" autoComplete="password" 
                 value={password} onChange={this.handleChange}/>
                <TextField variant="outlined" margin="normal" required  fullWidth name="confirmPassword" label="ConfirmPassword" type="password" id="confirmPassword" autoComplete="confirmPassword" 
                 value={confirmPassword} onChange={this.handleChange}/>
                <Button type="submit" variant="contained" color="primary" className='signin'> Sign Up</Button> 
                </form>
            </div>
        )
    }
}

export default SignUp;