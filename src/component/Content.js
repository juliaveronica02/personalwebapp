//rcc
import React, {Component} from 'react'

class Content extends Component {
    render() {
        return (
            <div className="bg">
                <div className="profile">
                <img src="https://s4.bukalapak.com/img/457590103/s-400-400/41KTjPYe3yL.jpg" alt="test"/>
                    <h2  style={{color: "white"}}>Julia Veronica</h2>
                    <hr style={{width:"60%"}}/>
                    <h4>Tanjung Pinang</h4>
                    <p  style={{color: "white"}}>Web Developer | Web Designer</p>
                    <p>I hear and I forget. I see and I remember. I do and I understand.</p>
                    <p>~ Confucius ~</p>
                </div>
            </div>
        )
    }
}
export default Content