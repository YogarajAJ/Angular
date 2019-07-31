import React from 'react';

import Navbar from './components/Navbar';

import Login from './components/Login';


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            loginStatus: false
        }
    }

    //   componentDidUpdate() {
    //     console.log("After Setting -> ", this.state.loginTrue)

    //   }

    //   loginTrue = flag => {
    //     console.log("Before Setting -> ", this.state.loginTrue)
    //     console.log("Parameter Value -> ", flag)

    //     this.setState({
    //       loginTrue: true
    //     })

    //     console.log("After Setting -> ", this.state.loginTrue)
    //     // this.showLogin()
    //   }

    //   showLogin() {
    //     return (this.state.loginTrue) ? (<div className="container">
    //                 <div>

    //                 </div>
    //                 <div className="row">
    //                     <div className="col-md-3">
    //                         <AddBuddy />
    //                     </div>
    //                     <div className="col-md-7">
    //                         <Newsfeed />
    //                     </div>
    //                     <div className="col-md-2">
    //                         <Buddy />
    //                     </div>
    //                 </div>
    //             </div>) : <Login />
    //   }

    // render() {
    //     return (
    //         <div>
    //             <Navbar loginTrue={this.loginTrue} />
    //             {this.showLogin()}

    //         </div>
    //     );
    // }

    // loginStatus = () => {
    //     this.setState({
    //         loginStatus : !this.state.loginStatus
    //     })
    // }

    // getLoginStatus = (e) => {
    //     console.log(e)
    // }

    render() {

        return (
            <div>
                <div>
                    <Navbar />
                    <div >
                        <Login />
                    </div>
                </div>
            </div>

        );
    }
}

export default App