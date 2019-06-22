import React, { Component } from "react";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: ''
        }

    }


    render() {


        return (

            <form>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="username" />

                 </div>
                 <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                        </div>
                        <input type="password" className="form-control" placeholder="password" />
                </div>
                <div className="row align-items-center remember">
                    <input type="checkbox" />Remember Me
                 </div>
                <div className="form-group">
                     <input type="submit" value="Login" className="btn float-right login_btn" />
                </div>
            </form>
        )
    }





}
export default Form