import React from 'react'

export default class PostData extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            likes: this.props.postData.likes,
            liked: this.props.postData.liked,
            showCommentBox:false
        }
    }

    setLikeIcon(liked) {

        return ((liked) ? ("fa fa-thumbs-o-up") : ("fa fa-thumbs-o-down"));
    }

    addLike = () => {
        if (this.state.liked) {
            this.setState({
                likes: this.state.likes + 1,
                liked:!this.state.liked
            })
        }else{
            this.setState({
                liked:!this.state.liked
            })
            
        }
    }

    showComment = () => {
        this.setState({
            showCommentBox:!this.state.showCommentBox
        })
    }

    render() {

        let myTitleStyle = {
            textAlign: "left",
            paddingLeft: "10px",
            paddingTop: "5px",
            float: "left",
            border: "1px dashed grey"
        }

        let postData = this.props.postData

        return (
            <div>
                <div key={postData.id} className="card" style={{ border: "2px dashed grey" }}>
                    <div className="card-title" style={myTitleStyle} >
                        <h5>{this.state.name}</h5>
                    </div>
                    <div className="card-body">
                        <h4>{postData.postData}</h4><br></br>

                        <button className="btn btn-primary" onClick={this.addLike}>
                            {this.state.likes} &nbsp;&nbsp;
                                    <i className={this.setLikeIcon(this.state.liked)}></i>
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-secondary" onClick={this.showComment}>Comments</button>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}