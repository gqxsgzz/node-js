import React, { Component } from 'react';
import { NavBar, Icon, Tabs } from 'antd-mobile';
import Home from './Home';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    >住吧家居</NavBar>
                    <Home />
            </div>
        )
    }
}