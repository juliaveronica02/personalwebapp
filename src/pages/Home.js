import React, {Component} from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Content from '../component/Content'

class Home extends Component {
   
    render() {
        return (
            <div>
                <Navbar/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
export default Home