import React from 'react';
import searchIcon from '../../../assets/images/iconfinder_icon-111-search_314807.png';

const navi = (props) => {
    return (
        <nav>
            <ul className="main-nav">
                <li><a href="#">{props.navList[0].title}</a></li>
                <li><a href="#">{props.navList[1].title}</a></li>
                <li>
                    <form className="nav-search">
                        <input type="text"/>
                        <button><img src={searchIcon}/></button>
                    </form>
                </li>
            </ul> 
        </nav>
    );
}

export default navi;