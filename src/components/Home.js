import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/Home.scss'
class Test extends Component{
    render(){
        return(
            <div className="root">
                <img className="avatar" src="https://quangpl.github.io/assets/images/avt.jpg"/>
            <h3 className="home">Culicode (quangpl)</h3>
                -> <a href="https://quangpl.github.io">Blog</a> , <a href="https://www.facebook.com/quangpl99">Facebook</a> <br></br>

                -> React Boilerplate

            Initial install : Raact, Babel, SCCC, Webpack<br></br>
            In the feature : Update twice a month                         

            </div>
        )
    }
}
export default Test;