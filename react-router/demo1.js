const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><ReactRouter.Link to="/about">About</ReactRouter.Link></li>
                    <li><ReactRouter.Link to="/inbox">Inbox</ReactRouter.Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
});

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.Route path="about" component={About}/>
            <ReactRouter.Route path="inbox" component={Inbox}>
                <ReactRouter.Route path="messages/:id" component={Message}/>
            </ReactRouter.Route>
        </ReactRouter.Route>
    </ReactRouter.Router>
    , document.getElementById("content"));