import React from 'react'
import '../css/navbar.css'

class Navbar extends React.Component {

    code = () => {
      //  let flag = true
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3 className="navbar-brand">Workout Buddy</h3>
                <ul className="navbar-nav ml-auto">
                    {/* <a className="nav-item nav-link active" onClick={() => this.props.loginTrue(flag)}>Login <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Register</a> */}
                </ul>
            </nav>
        )
    }


    render() {
        return (
            this.code()
        )
    }
}

export default Navbar