import React from 'react'
import Login from './Login'
import axios from 'axios'


export default class Register extends React.Component {

    constructor() {
        super()
        this.state = {
            loginStatus: false,
            userName: "",
            password: "",
            name: "",
            location: "",
            phoneNumber: "",
            buddies: [],
            showRegister: true
        }
    }
    registerUser = () => {
        axios.post("http://localhost:3003/users",
            {
                name: this.state.name,
                userName: this.state.userName,
                password: this.state.password,
                phoneNumber: this.state.phoneNumber,
                location: this.state.location
            }
        )
            .then(response => alert(JSON.parse(JSON.stringify(response.data))))
            .catch(error => console.log(error))


        axios.post("http://localhost:3000/buddy",
            {
                name: this.state.name,
                buddies: [],
                phoneNumber: this.state.phoneNumber,
                location: this.state.location
            }
        )
            .then(response => alert(JSON.parse(JSON.stringify(response.data))))
            .catch(error => console.log(error))

    }

    changeRegister = () => {
        this.setState({
            showRegister:!this.state.showRegister
        })
    }

    handleChange = (e) =>  {
        this.setState({
            [e.target.name]:e.target.value
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

        let ans = (this.state.showRegister)?
            <div className="container" style={style}>
                <br />
                <h2 className="h2" style={{ color: "black", size: "13rem" }}>Register</h2><br />
                <input className="form-control" placeholder="User Name" name="userName" onChange={this.handleChange}></input><br></br>
                <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange}></input><br />
                <input className="form-control" placeholder="Name" name="name" onChange={this.handleChange}></input><br></br>
                <input className="form-control" placeholder="Location" name="location" onChange={this.handleChange}></input><br></br>
                <input className="form-control" placeholder="Phone Number" name="phoneNumber" onChange={this.handleChange}></input><br></br>
                <button className="btn btn-dark btn-lg" onClick={this.registerUser}>Register</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-dark btn-lg" onClick={this.changeRegister}>Login</button><br /><br />
            </div>:
            <Login />

        return (
           <div>
               {ans}
           </div>
        );
    }
}