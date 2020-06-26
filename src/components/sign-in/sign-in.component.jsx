import React from 'react';
import './sign-in.styles.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=event=>{
        const{value,name}=event.target;
        this.setState({[name]:value});

    }
    render()
    {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form className='sign-in-form' onSubmit={this.handleSubmit}>
                <TextField variant="outlined" margin="normal" required fullWidth  id="email" label="Email Address"  name="email" autoComplete="email" autoFocus 
                value={this.state.email} onChange={this.handleChange}/>
                <TextField variant="outlined" margin="normal" required  fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" 
                 value={this.state.password} onChange={this.handleChange}/>
                <Button type="submit" variant="contained" color="primary" className='signin'> Sign In</Button> OR
                <Button onClick={signInWithGoogle} variant="contained" color="primary" className='google-signin'> Sign In with Google</Button>
                </form>
            </div>
        );
    }
}

export default SignIn;