import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from '../../Components/Ui/Button/Button'
import Input from '../../Components/Ui/Input/Input'

export default class Auth extends Component {

    loginHandler = () => {


    }

    registerHandler = () => {


    }

    submitHandler = e => {
        e.preventDefault()
    }


    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input
                            label='Email'
                        />

                        <Input
                            label='Password'
                            errorMessage={'TEST'}
                        />

                        <Button

                            type='succes'
                            onClick={this.loginHandler}
                        >
                            Login
                        </Button>
                        <Button
                            type='primary'
                            onClick={this.registerHandler}
                        >
                            Register
                        </Button>
                    </form>
                </div>

            </div>
        )
    }
}