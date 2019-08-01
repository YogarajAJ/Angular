import React from 'react'
import axios from 'axios'
import Buddy from '../components/Buddy';
import Newsfeed from '../components/Newsfeed';
import AddBuddy from '../components/AddBuddy';
import Register from './Register'
class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            loginStatus: false,
            users: [],
            userName: "",
            password: "",
            name: "",
            location: "",
            phoneNumber: "",
            posts: [],
            buddies: [],
            showRegister: true,
            logoutStatus:false
        }


        this.value = false
        this.getUsers()
        this.getPosts()
    }


    setBuddies = (obj) => {
        this.setState({
            buddies: obj
        })
    }

    checkLogin = () => {
        this.state.users.map(
            user => {
                if (user.userName === this.state.userName && user.password === this.state.password) {
                    this.setState({
                        loginStatus: true,
                        logoutStatus:false,
                        
                    })
                }
            }
        )
        console.log(this.value)

    }

    getPosts = () => {
        axios.get("http://localhost:4000/posts")
            .then(response => this.setState({
                posts: JSON.parse(JSON.stringify(response.data))
            }))
    }

    getUsers = () => {
        axios.get("http://localhost:3003/users").then(
            response => {
                this.setState({
                    users: JSON.parse(JSON.stringify(response.data)).slice()
                })
            })
    }

    // onNameChange = (e) => {
    //     this.setState({
    //         userName: e.target.value
    //     })
    // }

    // onPassworChange = (e) => {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }

    changeRegister = () => {
        this.setState({
            showRegister: !this.state.showRegister
        })
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    logout = () =>{
        this.setState({
            logoutStatus:!this.state.logoutStatus,
            loginStatus:!this.state.loginStatus
        })
    }

    render() {


        let style = {
            "textAlign": "center",
            "float": "center",
            "width": "25rem",
            "border": "3px solid grey",
            "backgroundColor": "darkgrey",
            "color": "whitesmoke"
        }

        // console.log(this.props.loginStatus)

        let logoutUser = (this.state.logoutStatus) ? <Login /> : <div style={{ float: 'right',paddingRight:"90px" }}><button className="btn btn-danger btn-lg"  onClick={this.logout}>Logout</button></div>

        return (
            <div>

                {this.state.loginStatus ? <div>
                    {/* <h2 style={{ "textAlign": "center" }}>Workout Buddy</h2> */}
                    <br />
                    <div>
                        {logoutUser}
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <AddBuddy userName={this.state.userName} />
                            </div>
                            <div className="col-md-6">
                                <Newsfeed posts={this.state.posts} userName={this.state.userName} />
                            </div>
                            <div className="col-md-2">
                                <Buddy userName={this.state.userName} />
                            </div>
                        </div>
                    </div>
                </div> :
                    (<div>
                        <br /><br /><br />

                        {this.state.showRegister ?

                            <div className="container" style={style}>
                                <h2 className="h2" style={{ color: "black", size: "13rem" }}>Login</h2><br />
                                <input className="form-control" placeholder="User Name" name="userName" onChange={this.handleChange}></input><br></br>
                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange}></input><br />
                                <button className="btn btn-dark btn-lg" onClick={this.checkLogin}>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-dark btn-lg" onClick={this.changeRegister}>Register</button><br /><br />

                            </div>
                            : <Register />
                        }
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Login