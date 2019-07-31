import React from 'react'
import axios from 'axios'
import Buddy from '../components/Buddy';
import Newsfeed from '../components/Newsfeed';
import AddBuddy from '../components/AddBuddy';

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            loginStatus: false,
            users: [],
            userName: "",
            password: ""
        }


        this.value = false
        this.getUsers()
    }



    checkLogin = () => {
        this.state.users.map(
            user => {
                if (user.userName === this.state.userName && user.password === this.state.password) {
                    this.setState({
                        loginStatus: true
                    })
                }
            }
        )
        console.log(this.value)

    }


    getUsers = () => {
        axios.get("http://localhost:3003/users").then(
            response => {
                this.setState({
                    users: JSON.parse(JSON.stringify(response.data)).slice()
                })
            })
    }

    onNameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    onPassworChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {


        let style = {
            "textAlign": "center",
            "float": "center",
            "width": "18rem",
            "border": "3px solid grey"
        }

        // console.log(this.props.loginStatus)



        return (
            <div>

                {this.state.loginStatus ? <div>
                    <h2 style={{"textAlign":"center"}}>Workout Buddy</h2>
                <br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <AddBuddy userName={this.state.userName} />
                            </div>
                            <div className="col-md-7">
                                <Newsfeed  />
                            </div>
                            <div className="col-md-2">
                                <Buddy userName={this.state.userName} />
                            </div>
                        </div>
                    </div>
                </div> : <div className="container" style={style}>
                        <br />
                        <h2>Login</h2><br />
                        <input className="form-control" placeholder="User Name" onChange={this.onNameChange}></input><br></br>
                        <input type="password" className="form-control" placeholder="Password" onChange={this.onPassworChange}></input><br />
                        <button className="btn btn-dark" onClick={this.checkLogin}>Login</button><br /><br />
                    </div>
                }
            </div>
        );
    }
}

export default Login