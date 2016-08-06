//周期
class Timer extends React.Component {
    /*组件创建并首次渲染到真实dom中会调用以下三个生命周期函数＋render方法，仅调用一次，称为创建期（Mount）*/
    constructor(props) {
        super(props);
        this.state = { seconds: 0, buttoncolor: ''}; }
    componentWillMount() { }
    componentDidMount() { }
    /*组件被实例化之后（组件已在真实dom中），组件与用户交互过程中，组件属性或状态改变时会调用以下三个生命周期函数＋render方法，可重复调用，更新dom，称为更新期（Update）*/
    componentWillReceiveProps(nextrops) { }
    shouldComponentUpdate(nextProps, nextState) { }
    componentWillUpdate(nextProps, nextState) { }
    componentDidUpdate(preProps, preState) { }
    /*组件要从真实dom中移除时调用，称为销毁期（Unmount）*/
    componentWillUnmount() { }
    /*render方法返回虚拟dom，用于与真实dom（即旧的虚拟dom）做diff，在组件创建期（Mount）、更新期（Update）均会被调用*/
    render () {
        return (
            <button className = "ban-content" >
                React has been running for {this.state.seconds} seconds.
            </button>
        );
    }
}
ReactDOM.render(
    <Timer/>,
    document.getElementById("content")
);