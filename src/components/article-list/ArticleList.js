import React from 'react';
import './ArticleList.css';

import Article from "../article/Article";

export default function ArticleList({ articles }){
    const articlesList = articles.map( (value) => {
        return <li className="article-list__li" key={value.id}><Article article={value}/></li>
    });
    let styles = {width: '50%'};

    return (
        <ul className="article-list" style={styles}>
            {articlesList}
        </ul>
    );
};
