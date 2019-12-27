import React from 'react'

class NewPositon extends React.Component {
    constructor(props){
        super(props)
        this.state={
            top: 50
        }
    }

    render(){
        const { positionList } = this.props
        return (
            <div className="positionList" >
                <div>
                    <span>最新职位</span>
                    <span>更多</span>
                </div>
                <ul ref={ele => this.ele = ele} style={{position:"absolute",color:'rgba(0,0,0,0.6)',width: '100%',top:this.state.top + 'px' }} >
                    {
                        positionList && positionList.map(item=>{
                        return(
                            <li key={item.id} >
                            <a style={{flex:3,color:'#3C99D8'}} href="''">{item.name}</a>
                            <span style={{flex:2}} >{item.addr}</span>
                            <span style={{flex:1,textAlign:'right'}} >{item.dateTime}</span>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    scrollUl(){
        this.timer = setInterval(() => {
            this.setState((nextState)=>({top: nextState.top <= -450? 49 :nextState.top - 1}))
        }, 30);
    }

    lissen(ele){
        ele.addEventListener('mouseenter',this.mouseEnterEvent.bind(this))
        ele.addEventListener('mouseleave',this.mouseleaveEvent.bind(this))
    }
    mouseEnterEvent(){
        clearInterval(this.timer)
    }
    mouseleaveEvent(){
        if(this.timer) clearInterval(this.timer)
        this.scrollUl()
    }

    componentDidMount(){
        this.scrollUl()
        this.lissen(this.ele)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
}

export default NewPositon