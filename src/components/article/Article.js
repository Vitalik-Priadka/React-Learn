import React, { Component } from 'react';

class Article extends Component {

    render() {
        let article = this.props.article;

        return (
            <div className="card">
                <div className="card-header">
                    <h2>{article.title}</h2>
                </div>
                <div className="card-body">
                    {article.body}
                </div>
            </div>
        );
    }
}

export default Article;
