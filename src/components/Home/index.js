import { Component } from "react";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

class Home extends Component {
    state = {bookDetails: []}

    render() {
        const {bookDetails} = this.state
        
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken === undefined) {
            console.log('home')
            return redirect("/login")
        }
 
        return (<h1>Home</h1>)
    }
}

export default Home