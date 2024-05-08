class Component {
    constructor() {
        console.log("Component class const");
    }
    render() {}
}

class Message extends Component{
    constructor() {
        super();
        console.log("Message class const");
    }
}

let m1 = new Message();