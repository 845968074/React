var Hello = React.createClass({
    getDefaultProps: function(){
        return {
            name: 'pomy',
            git: 'dwqs'
        }
    },

    render: function(){
        return (
            <div>Hello,{this.props.name},git username is {this.props.dwqs}</div>
        )
    },
    conponentDidMount: function(){
        $(this.getDOMNode()).autoComplete({
            src: data
        })
    }
});
ReactDOM.render(<Hello />, document.getElementById("content"));