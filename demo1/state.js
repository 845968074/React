class Firstreact extends React.Component {
    getInitialStat() {
        return {liked: false};
    }

    handleClick() {
        this.setState({liked: !this.state.liked});
    }

    render() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handleClick}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        )
    }
}
ReactDOM.render(
    <Firstreact />,
    document.getElementById("example")
);
/*class LikeButton extends React.Component {
    getInitialStat() {
        return {liked: false};
    }

    handleClick() {
        this.setState({liked: !this.state.liked});
    }

    render() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handleClick}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        )
    }
}
ReactDOM.render(
    <LikeButton/>,
    document.getElementById('example')
);*/
/*var LikeButton = React.createClass({
 getInitialState: function () {
 return this.state = {liked: 1};
 },
 handle: function (event) {
 this.setState({liked: !this.state.liked});
 },
 render: function () {
 var text = this.state.liked == 1 ? '喜欢' : '不喜欢';
 return (
 <p onClick={this.handle}>
 你<b>{text}</b>我。点我切换状态。
 </p>
 );
 }
 });*/
