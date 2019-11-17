import React, { Component } from 'react';
import { Carousel, WingBlank,WhiteSpace } from 'antd-mobile';

export default class Home extends Component {
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
                {/* <WingBlank> */}
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
                    <WhiteSpace size="lg" /><WingBlank size="lg"><img src='/d2.jpg' style={{width:'100%'}}/></WingBlank><WhiteSpace />
                    <div style={{backgroundColor:'white',paddingTop:'5px'}}>
                        <div style={{borderLeftWidth:'5px',borderLeftStyle:'solid',borderLeftColor:'#3fcccb'}}>
                            <p style={{fontSize:'16px',marginLeft:'10px'}}>热门推荐</p>
                        </div>
                        <img src='/d3.jpg' style={{width:'100%'}}/>
                    </div>
                {/* </WingBlank> */}
            </div>
        );
    }
}
