import React from 'react'
import axios from 'axios'

import '../css/buddy.css'

// buddyName:"",
// buddyLocation:"",
// buddyPhoneNumber:""

class Buddy extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.userName,
            buddies: [],
            users: [],
            buddy: []
            //showAddBuddy:false

        }

        this.onSubmit = this.onSubmit.bind(this)

        this.getUsers()
        this.getBuddies()



    }


    getUsers = () => {
        axios.get("http://localhost:3003/users").then(
            response => {
                this.setState({
                    users: JSON.parse(JSON.stringify(response.data)).slice()
                })
            })
    }


    getBuddies = () => {
        axios.get("http://localhost:3000/buddy").then(
            response => {
                let data = JSON.parse(JSON.stringify(response.data)).slice()
                let temp = data.filter(data => data.name === this.state.name)
                let userBuddies = temp[0].buddies
                let buddyData = []
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < userBuddies.length; j++) {
                        if (data[i].id === userBuddies[j]) {
                            buddyData.push(data[i])
                        }
                    }
                }

                console.log(data, buddyData, userBuddies)
                this.setState({
                    buddy: buddyData
                })
            })
    }

    // callAddBuddy = () =>{
    //     this.setState({
    //         showAddBuddy:!this.state.showAddBuddy
    //     })
    // }


    // cancelAddBuddy = () =>{
    //     this.setState({
    //         showAddBuddy:!this.state.showAddBuddy
    //     })
    // }

    onSubmit(e) {
        e.preventDefault();
        const title = this.title
        console.log(title.value);
    }


    render() {

        let buddyData = this.state.buddy.map(
            b => (
                <div key={b.id}>
                    <li className="list-group-item"> {b.name} </li>
                </div>
            )
        )

        let style = {
            width: "200px",
            float: "center",
            textAlign: "center",
            border: "3px solid grey",
            background: "whitesmoke"
        }

        if (buddyData.length === 0) {
            return (
                <div>
                    <br /><br />
                    <div className="container" style={style}>
                        <br />
                        <h3>Buddy's </h3>
                        <br />
                        <h3>No Buddies Right now... </h3>
                        <br />
                    </div>
                </div>
            );
        }

        // let showAddBuddy = (this.state.showAddBuddy)?
        // <div>
        // <input className="form-control" placeholder="Buddy Name" ref={ (c) => this.title = c } name="title"></input> <br />
        // <input className="form-control" placeholder="location"></input> <br />
        // <input className="form-control" placeholder="Phone Number"></input> <br />
        // <button type="button" onClick={this.onSubmit} className="btn btn-success">Add Buddy</button>
        // <button type="button" onClick={this.cancelAddBuddy} className="btn btn-danger">Cancel</button>
        // </div>
        // : 
        // <button onClick = {this.callAddBuddy} className="btn btn-primary btn-sm">Add Buddy</button>

        return (
            <div>
                <br /><br />
                <div className="container" style={style}>
                    <br />
                    <h3>Buddy's </h3>
                    <br />
                    <ul className="list-group">
                        {buddyData}
                    </ul>
                    <br />
                </div>
            </div>
        );

    }
}

export default Buddy