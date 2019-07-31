import React from 'react'
import axios from 'axios'

class Newsfeed extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            likes: 10
        }

        this.liked = false
        //this.getPosts()
    }

    componentDidMount() {
        this.getPosts()
    }
        getPosts = () => {
            return (
                axios.get("http://localhost:4000/posts")
                    .then(response => {
                        const data = JSON.parse(JSON.stringify(response.data))
                        this.setState({
                            posts: data.slice()
                        })

                    })
                    .catch(error => console.log(error))
            )
        }
    
    render() {

        const p = this.state.posts.map(
            myPost => (
                myPost.userPosts.map(
                    postData => (
                        <div className="card">
                            <div className="card-title">
                                <h2>{myPost.name}</h2>
                            </div>
                            <div className="card-body">
                                <h4>{postData.postData}</h4><br></br>

                                <button onClick={this.changeLike()} className="btn btn-primary">
                                    {postData.likes} &nbsp;&nbsp;
                                    <i className={this.setLikeIcon(postData.liked)}></i>
                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-secondary">Comments</button>
                            </div>
                        </div>

                    )
                )
            )
        )

        return (
            <div className="container">
                <div className="row" >
                    <input placeholder="Enter your Posts..." className="form-control"></input>
                    {/* <button onClick={this.addPosts()}></button> */}
                </div>

                {p}
            </div>
        );
    }

    addPosts() {
        console.log("Clicked")
    }
    setLikeIcon(liked) {

        return ((liked) ? ("fa fa-thumbs-o-up") : ("fa fa-thumbs-o-down"));
    }

    changeLike() {
        console.log(this.liked)
    }
}

export default Newsfeed