import React, { Component } from 'react';
import { Carousel, WingBlank,WhiteSpace,NavBar,Icon } from 'antd-mobile';

export default class AppShop extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="shopping-cart" style={{ color:'white', marginRight: '16px' }} />,
                    ]}
                    >商城</NavBar>
                <Carousel
                autoplay={true}//自动播放
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}>
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt="大图"
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                <div>
                    <div style={{textAlign:'center'}}>
                        <img src="/sc3.jpg" style={{width:'100%'}}/>  
                    </div>
                    <WhiteSpace size="lg" /><WingBlank size="lg"><img src='/sc4.jpg' style={{width:'100%'}}/></WingBlank><WhiteSpace />
                </div>          
            </div>
        );
    }
}

