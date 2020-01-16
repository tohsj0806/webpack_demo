//document.write("search")

import React from 'react';
import ReactDom from 'react-dom';
import './search.css';
import logo from './images/gitHub.png'

class Search extends React.Component{
    render(){
        return <div className="search-text"> <img src={logo}/>Search Text</div>

    }
}

ReactDom.render(
    <Search/>,
    document.getElementById('root')
);