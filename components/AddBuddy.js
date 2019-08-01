import React from 'react'
import axios from 'axios'
import '../css/buddy.css'

class AddBuddy extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            userName: this.props.userName,
            userObject: {},
            name: "",
            location: "",
            phoneNumber: "",
            buddies: [],
            buddyId: 0,
            buddyObject: [],
            buttonStatus: true
        }

        this.getBuddies()
    }


    sendBuddy = () =>(this.getBuddies())

    getBuddies = () => {
        axios.get("http://localhost:3000/buddy").then(
            response => {
                let data = JSON.parse(JSON.stringify(response.data)).slice()
                let temp = data.filter(data => data.name === this.state.userName)
                this.setState({
                    userObject: temp
                })


            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // onLocationChange = (e) => {
    //     this.setState({
    //         location: e.target.value
    //     })
    // }

    // onPhoneNumberChange = (e) => {
    //     this.setState({
    //         phoneNumber: e.target.value
    //     })
    // }

    componentDidUpdate() {



        if (this.state.buddyObject.length !== 0) {
            axios.put("http://localhost:3000/buddy/" + this.state.userObject[0].id,
                {
                    id: this.state.userObject[0].id,
                    name: this.state.userObject[0].name,
                    location: this.state.userObject[0].location,
                    phoneNumber: this.state.userObject[0].phoneNumber,
                    buddies: [...this.state.userObject[0].buddies, this.state.buddyId]
                })
                .then(response => alert(this.state.name + " is added successfully"))
                .catch(error => alert(error))


        }
    }

    onFormSubmit = () => {
        axios.post("http://localhost:3000/buddy",
            {
                name: this.state.name,
                location: this.state.location,
                buddies: [],
                phoneNumber: this.state.phoneNumber
            })
            .then(response => {
                return this.setState({
                    buddyObject: this.state.buddyObject.push(response.data),
                    buddyId: response.data.id
                })
            }
            )
            .catch(error => console.log(error))


    }


    code = () => {
        // let style = {
        //     "text-align":"center"
        // }


        let style = {
            textAlign: "center",
            float: "center",
            width: "250px",
            border: "3px solid grey",
            background:"whitesmoke"
        }

        let inputStyle = {
            width: "200px"
        }
        let buttonStyle = {
            float: "center",
            textAlign: "center"
        }
        return (
            <div>
            <br /><br />

                <div className="container" style={style} >
                    <br />
                    <div>
                        <h3>Add Budddy Here !!!</h3>
                    </div>
                    <br />
                    <h4 style={{ textAlign: "center" }}>Buddy</h4>
                    <input className="form-control " style={inputStyle} name="name" placeholder="Budddy Name" onChange={this.handleChange}></input><br />
                    <input className="form-control " style={inputStyle} name="location" placeholder="Budddy Location" onChange={this.handleChange}></input><br />
                    <input className="form-control " style={inputStyle} name="phoneNumber" placeholder="Budddy Phone Number" onChange={this.handleChange}></input>
                    <div style={buttonStyle}><br /><button className="btn btn-dark" onClick={this.onFormSubmit}>Add</button></div><br />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.code()}
            </div>
        );
    }

}

export default AddBuddy