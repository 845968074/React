class Firstreact extends React.Component {
    render() {
        return (<div className="firstreact">
            <h1>Hello world</h1>
        </div>);
    }
}
class Secondreact extends React.Component {
    render() {
        return (
            <div className="secondreact">
                <Firstreact/>
                <h2>北京欢迎你！</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Secondreact />
        <Firstreact />
        <Firstreact/>
    </div>,
    document.getElementById("content")
)
;
