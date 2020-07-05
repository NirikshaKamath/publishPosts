import React from "react";
import ReactMarkdown from "react-markdown";
import "./Card.css";

class PunlishedCards extends React.Component {

    render() {
        const { title, body } = this.props;
        return (
            <div className="cards">
                <div className="title">
                    {title}
                </div>
                <div>
                    <ReactMarkdown source={body} />
                </div>
            </div>
        )
    }
}

export default PunlishedCards;