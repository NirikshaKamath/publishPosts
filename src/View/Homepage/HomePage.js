import React from "react";
import Cards from "../../Components/Card/Card"
import Button from "../../Components/Button/Button";
import { connect } from "react-redux";
import { addPosts } from "./action";
import TextArea from "../../Components/TextArea/TextArea";
import SearchBar from "../../Components/SearchBar/SearchBar";


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            body: null,
            titleError: "",
            bodyError: "",
            posts: this.props.posts.postList,
            page: "form"
        }
        this.displayCards = this.displayCards.bind(this);
    }

    displayCards() {
        const { posts } = this.state;
        return posts.map(post => {
            return (
                <Cards
                    title={post.title}
                    body={post.body}
                />
            )
        })
    }

    onPublish() {
        const { title, body } = this.state;
        if (title === null || title === "" || title === undefined) {
            this.setState({ titleError: "please enter valid title" });
        }
        else if (body === null || body === "" || body === undefined) {
            this.setState({ bodyError: "post cannot be empty" });
        }
        else {
            let posts = this.props.posts.postList;
            posts.splice(0, 0, {
                title, body
            })
            this.setState({ title: "", body: "" });
            this.props.addPosts(posts);
        }
    }

    handleChange(field, value) {
        this.setState({ [field]: value.target.value, titleError: "", bodyError: "" });
    }

    onSearch(value) {
        let searchString = value.target.value;
        const { posts } = this.state;
        if (searchString.length > 2) {
            let searchPost = posts.filter(post => {
                let title = post.title.toLowerCase()
                let body = post.body.toLowerCase();
                return title.includes(searchString) || body.includes(searchString);
            })

            this.setState({ posts: searchPost });
        }
    }

    onReset() {
        this.setState({ posts: this.props.posts.postList, searchString: "" })
    }

    render() {
        const { title, body, titleError, bodyError, page, searchString } = this.state;
        return (
            <div>
                <div>
                    <SearchBar
                        onChange={this.onSearch.bind(this)}
                        onClick={this.onReset.bind(this)}
                        value={searchString}
                    />

                    <div className="buttonsMain dispFlex">
                        <Button
                            onClick={() => this.setState({ page: "form" })}
                            label="New Post"
                        />
                        <Button
                            onClick={() => this.setState({ page: "posts" })}
                            label="Published"
                        />

                    </div>
                </div>
                <div className="main dispFlex">
                    {
                        page === "form" ?

                            <div className="form align-center">

                                <TextArea
                                    title="Title"
                                    placeholder="Enter Title"
                                    value={title}
                                    onChange={this.handleChange.bind(this, "title")}
                                    errorMessage={titleError} />


                                <TextArea
                                    title="Body"
                                    className="postBody"
                                    placeholder="Enter"
                                    value={body}
                                    errorMessage={bodyError}
                                    onChange={this.handleChange.bind(this, "body")} />

                                <div>
                                    <Button
                                        onClick={this.onPublish.bind(this)}
                                        label="Publish"
                                    />
                                </div>

                            </div> : ""}
                    <div className={page === "form" ? "posts" : "visible"}>
                        {this.displayCards()}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, { addPosts })(Homepage);

