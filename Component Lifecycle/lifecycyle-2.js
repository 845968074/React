class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            buttoncolor: ''
        };
        console.log("constructor","仅一次，组件被创建时执行");
        //console.log("可在此设置组件的初始state");
    }

    componentWillMount() {
        let self = this;
        self.setState({
            seconds: 1
        });
        console.log("componentWillMount", "仅一次，组件第一次被渲染到真实dom前调用，执行完会调用一次render")
        //console.log("在第一次render之前，最后一次机会修改state，修改后第一次render会依照更新后的state");
    }

    componentDidMount() {
        let self = this;
        self.DOMNode = ReactDOM.findDOMNode(self);//获取真实dom
        self.handleclick();
        self.timer=setInterval(self.tick.bind(self), 7200);//设置定时器，并绑定到响应函数tick
        console.log("componentDidMount", "仅一次，组件第一次render之后，且已插入到真实dom之后调用")
        //console.log("可在此操作真实dom、添加计时器、绑定监听事件等");
    }

    //定时器响应函数tick
    tick() {
        let self =this;
        self.setState({
            seconds: self.state.seconds + 1
        });
    }

    //按钮点击事件响应函数handleclick
    handleclick() {
        let self = this;
        if (!self.DOMNode) return;
        //为按钮绑定click事件监听函数
        self.DOMNode.addEventListener('click', function(e){
            let button = e.target;//指向被点击的按钮
            let parent = self.DOMNode;
            if (button.tagName.toUpperCase() === 'SPAN') {
                if (''==self.state.buttoncolor){
                    self.setState({
                        buttoncolor:' btn-content-another'
                    });
                } else {
                    self.setState({
                        buttoncolor: ''
                    });
                }
            }
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", "组件接收到新的props的时候调用")
        //console.log("可在此修改state或更新／不更新props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate","组件接收到新的props或者state时调用，默认返回true")
        //console.log("可在此根据props、state判断返回true或false，若为false，更新期生命周期函数不继续往下执行");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate","组件在接收到新的props或state后，render方法进行渲染之前调用")
        //console.log("不能在此处更改state");
    }

    componentDidUpdate(preProps, preState) {
        console.log("componentDidUpdate","组件的更新已经同步到真实DOM中之后立刻被调用")
        //console.log("可访问真实DOM节点并操作之");
    }


    componentWillUnmount() {
        let self = this;
        console.log("componentWillUnmount","组件销毁");
    }

    render () {
        let self=this;
        console.log("render","渲染返回虚拟dom");
        //debugger;
        return (
            <div>
                <button id= 'button' className = {"btn-content" +self.state.buttoncolor} >
                    React has been running for {self.state.seconds} seconds.
                </button>
                <p>
                    self.props.content from Timer_controller is {self.props.content} now!                     </p>
            </div>
        );
    }
}
ReactDOM.render(
    <Timer />,
    document.getElementById("content")
);