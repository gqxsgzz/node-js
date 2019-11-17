import React, { Component } from 'react';
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Carousel, WingBlank,WhiteSpace } from 'antd-mobile';

const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
  ];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                    <Tabs tabs={tabs2}
                    initialPage={1}
                    tabBarUnderlineStyle={{border:'2px solid #ffdb2c'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
                    <div>
                        <WhiteSpace size="lg" /><WingBlank size="lg"><img src='/dp.jpg' style={{width:'100%'}}/></WingBlank><WhiteSpace />
                        <WhiteSpace size="lg" /><WingBlank size="lg"><img src='/dp.jpg' style={{width:'100%'}}/></WingBlank><WhiteSpace />
                        <WhiteSpace size="lg" /><WingBlank size="lg"><img src='/dp.jpg' style={{width:'100%'}}/></WingBlank><WhiteSpace />
                    </div>
                    </Tabs>
                    {/* <Home /> */}
            </div>
        )
    }
}