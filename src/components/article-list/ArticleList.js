import React, {PureComponent} from 'react';
import './ArticleList.css';

import Article from "../article/Article";

export default class ArticleList extends PureComponent {
    state = {
      openId: null
    };

    componentWillMount() {
        let articles = this.props.articles || [];
        if (articles && articles.length > 0) {
            this.handleClick(articles[0].id);
        }
    }

    handleClick(openId){
        this.setState({
            openId: this.state.openId === openId? null : openId,
        });
    }

    render() {
        const articlesList = this.props.articles.map((value, index) => {
            return <li className="article-list__li" key={value.id}>
                <Article article={value}
                         onBtnClick = {this.handleClick.bind(this, value.id)}
                         isOpen={this.state.openId === value.id}/>
            </li>
        });
        let styles = {width: '50%'};

        return (
            <ul className="article-list" style={styles}>
                {articlesList}
            </ul>
        );
    }
}
