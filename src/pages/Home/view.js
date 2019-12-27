import React, { Component } from 'react'
import NewPositon from '../../components/NewPositon'
import { connect } from 'react-redux'



const Login = ()=>{
    return (
        <div className="login">
            <span>欢迎来到阿里巴巴集团招聘！</span>
            <a href="''">登录</a> | <a href="''">注册</a>
        </div>
    )
}

class view extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { positionList, HotList, headerNavList } = this.props.data
        return(
            <div>
                <div className="homeHeader">
                    <div className="headerMain">
                        <div>
                            <div style={{float:"left",overflow:'hidden'}}>
                                <img className="logo" src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="" style={{height:'20px'}} />
                                <span className="headerBoder">|</span>
                            </div>
                            <ul className="HeaderNavListWarp">
                                <span className="headerTitle">社招官网</span>
                                {
                                    headerNavList && headerNavList.map(item=>{
                                        return(
                                            <li key={item.id} >{item.name}</li>
                                        )
                                    })
                                }
                                <Login></Login>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="homeMain">
                    <img className="mainImg" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
                    <div className="mainBg" ></div>
                    <div className="mainBodyWarp">
                        <div className="mainBody">
                            <p>If not now, when?</p>
                            <p>If not me, who?</p>
                            <p>此时此刻，非我莫属！</p>
                            <div className="search" >
                                <span className="searchBg"></span>
                                <input placeholder="请输入职位关键词" className="searchInput" type="text"/>
                                <button className="searchBtn">搜索</button>
                            </div>
                            <ul className="hotSearch" >
                                <span>热门搜索：</span>
                                {
                                    HotList && HotList.map(item=>{
                                        return (
                                            <li key={item.name} >{item.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="homeContent">
                    <div className="contentWarp">
                        <div className="aLiBaBa">
                            <div>
                                <img style={{width: '179px'}} src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=""/>
                            </div>
                            <div>
                                <img style={{width: '260px'}} src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
                            </div>
                        </div>
                        <div className="newPositionWarp">
                        <NewPositon positionList={positionList} ></NewPositon>
                        </div>
                       
                    </div>         
                </div>
                <div className="footer">
                    <span>阿里巴巴集团 Copyright &copy; 1999-2019 版权所有</span>
                </div>                    
            </div>
            
        )
    }
}

const mapStateToProps = (state)=>({
    data: state.HomeReducer
})

const mapDispatchToProps = (dispatch)=>({
    dispatch
})


export default connect(mapStateToProps,mapDispatchToProps)(view)