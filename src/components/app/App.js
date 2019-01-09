import React, {Component} from 'react';
import news from "../articles";
import './App.css';

import ArticleList from "../article-list/ArticleList";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isReverted: false,
            isShow: true,
        };
    }
    componentWillMount() {
        console.log(`Mounted!`)
    }

    toggleShow = () => {
        this.setState(state => ({isShow: !state.isShow}));
    };
    revert = () => {
        this.setState(state => ({isReverted: !state.isReverted}))
    };

    render() {
        // let logo = this.props.logo;
        let articleList = this.state.isReverted? news.slice().reverse() : news;

        return (
            <div className="app">
                <header className="app-header">
                    <h4>My fancy header :3</h4>
                    {/*<img src={logo} className="app-logo" alt="logo"/>*/}
                    {/*<a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                </header>
                <section className="app-wrapper container">
                    <span className="main-action">
                        <h4 className="main-action__text">Action Block</h4>
                        <div className="main-action__buttons">
                            <button className="btn btn-primary" onClick={this.toggleShow} type="button">
                                {(this.state.isShow? 'Disable' : 'Show') + ' All'}
                            </button>
                            <button className="btn btn-primary" onClick={this.revert} type="button">
                                {'Revert'}
                            </button>
                        </div>
                    </span>

                    <div className="main-content">
                        {this.state.isShow && <ArticleList articles={articleList}/>}
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
