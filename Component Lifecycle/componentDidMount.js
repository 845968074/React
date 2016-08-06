var data = [];
var comp = React.createClass({
    render: function(){
        return <imput />
    },
    conponentDidMount: function(){
        $(this.getDOMNode()).autoComplete({
            src: data
        })
    }
})