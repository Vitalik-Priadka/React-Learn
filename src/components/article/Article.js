import React, { PureComponent } from 'react';
import './Article.css';

class Article extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            //isOpen: this.props.isOpen || false,
        };
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     if (nextProps.defaultOpen !== this.props.defaultOpen){
    //         this.setState({isOpen: nextProps.defaultOpen})
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return this.state.isOpen !== nextState.isOpen;
    // }

    render() {
        let {article, isOpen, onBtnClick} = this.props;

        return (
            <div className="card">
                <div className="card-header">
                    <h2>{article.title}</h2>
                    <button className="btn btn-primary" onClick={onBtnClick} type="button">
                        {isOpen? 'Close' : 'Open'}
                    </button>
                </div>
                {isOpen && <div className="card-body">
                    {article.body}
                </div>}
            </div>
        );
    }
}

export default Article;
