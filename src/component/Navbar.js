import React,{Component} from 'react';
import './navbar.css'

class Navbar extends Component{
    render(){
        return(
            <div className="container">
                <div className="logo">
                    <img className="rotating" src="https://s4.bukalapak.com/img/457590103/s-400-400/41KTjPYe3yL.jpg" alt="test"/>
                </div>
                <div className="bg-color">
                    <ul className="ul">
                        <li className="li"> <a className="active" href="#"> Home </a> </li>
                        <li className="li"> <a href="#"> About </a> </li>
                        <li className="li"> <a href="#"> Portofolio </a> </li>
                        <li className="li"> <a href="#"> Contact </a> </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar