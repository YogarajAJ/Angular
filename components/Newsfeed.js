import React from 'react'
import PostData from './PostData';



class Newsfeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.posts,
            

        }
    }

 


    
    render() {

        let style = {
            textAlign: "center",
            float: "center",
            width: "500px",
            // border: "3px solid grey"
        }

     

        const p = this.state.posts.map(
            myPost => (
                myPost.userPosts.map(
                    postData =>(!postData.public)?<div></div> :(
                        <div>
                           <PostData  name={myPost.name} postData={postData} />
                        </div>
                    )
                )
            )
        )

        

        return (

            <div className="container" style={style}>
               
                <div>
                    <h2 style={{color:"whitesmoke"}}>Get a good Start {this.props.userName} </h2><br />
                </div>

                <div>
                    <input className="form-control" style={{width:"500px"}}></input><br /><button className="btn btn-primary">Add</button><br/><br />
                    
                </div>
                <div>
                <h5 style={{color:'whitesmoke',float:'left'}}>Buddies Posts :-</h5><br/><br />
                </div>
                {p}
            </div>
        );
    }
}

export default Newsfeed



// /*

// constructor() {
//         super()
//         this.state = {
//             posts: [],
//             likes: 10
//         }

//         this.liked = false
//         //this.getPosts()
//     }

//     componentDidMount() {
//         this.getPosts()
//     }
//         getPosts = () => {
//             return (
//                 axios.get("http://localhost:4000/posts")
//                     .then(response => {
//                         const data = JSON.parse(JSON.stringify(response.data))
//                         this.setState({
//                             posts: data.slice()
//                         })

//                     })
//                     .catch(error => console.log(error))
//             )
//         }

//     render() {



//         return (
//             <div className="container">
//                 <div className="row" >
//                     <input placeholder="Enter your Posts..." className="form-control"></input>
//                     {/* <button onClick={this.addPosts()}></button> */}
//                     </div>

//                     {p}
//                 </div>
//             );
//         }

//         addPosts() {
//             console.log("Clicked")
//         }
//         setLikeIcon(liked) {

//             return ((liked) ? ("fa fa-thumbs-o-up") : ("fa fa-thumbs-o-down"));
//         }

//         changeLike() {
//             console.log(this.liked)
//         }

// */