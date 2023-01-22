import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/Header/Header'

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Typography from '@material-ui/core/Typography';  


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPass: false
        }
    }

    toggle() {
        const { showPass } = this.state;

        this.setState({
            showPass: !showPass
        })
    }

    render() {

        const { updateText, validation, showSignup } = this.props;
        const { showPass } = this.state;
        return (
            <div>
                <Header />
                <div className='mainDiv'>


                    <FormControl className="formDiv">

                        <Typography variant="display2" >
                            Sign In
                        </Typography>
                        <br />
                        <TextField className="formEle" id="input-with-icon-grid"
                            label="Email"
                            type="email"
                            onChange={updateText}
                            name="loginEmail"
                            margin="normal"
                        />


                        <TextField className="formEle" id="input-with-icon-grid"
                            label="Password"
                            type={showPass ? 'text' : 'password'}
                            onChange={updateText}
                            name="loginPass"
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.toggle.bind(this)}
                                        >
                                            {showPass ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <br />


                        <Button className="formEle" color="primary" >
                            Forgot password?
                        </Button>
                        <br />

                        <Button className="formEle" variant="contained" color="primary" onClick={validation}>
                            Sign In
                        </Button>
                        <br /><br />
                        <Typography variant="body2" >
                            New to QuizCloud?
                        </Typography>

                        <Button className="formEle" variant="contained" color="secondary" onClick={showSignup}>
                            Sign up
                        </Button>


                    </FormControl>


                </div>
            </div>
        );
    }
}

export default Login;