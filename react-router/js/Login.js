import React from 'react';

let Login = React.createClass({

    render() {
        return(<div>Welcome to login</div>);
    }
});

export default Login;
/*
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.calcArea()
    }

    calcArea() {
        return this.height * this.width;
    }
    setArea(height)
    {
        this.height=height;
        return height;
    }
    set area(height)
    {
      this.height=height;
    }
}
let a=new Polygon(1,3);
console.log(a.getArea());
area(2);
console.log(a.height);
/!*let b=a.setArea(1);
console.log(b);*!/
//console.log(a.calcArea);*/
