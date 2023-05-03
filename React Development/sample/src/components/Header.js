import {Component} from 'react'


// function Header(props){
//     return (<h1>Hello I am {props.name}</h1>)
// }
class Header extends Component {
    render(){return (<h1>Hello I am {this.props.name}</h1>)}
}
export default Header