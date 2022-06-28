import React from "react";

export class Myform extends React.Component{

    state = {
        username: "",
        password: "",
        remeber: "false"
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
         [name]: type === 'checkbox' ? checked : value,
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    handleResetState = () => {
        this.setState({
            username: "",
            password: "",
            remeber: "false"
        })
            


        
    }

    handlePrefillForm = () =>{
        this.setState({
            username: "mimmo",
            password: "polloepollo123",
            remeber: "true"
        })
    }

    // handleCheckboxChange = (event) =>{
    //     const name = event.target.name
    //     const checked = event.target.checked

    //     this.setState({
    //         [name]:checked,
    //     })
    // }


    render(){
        return(
            <>
                <h1>My form</h1>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                <input name="remeber" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}  />
                <button onClick={this.handleResetState}>Reset</button>
                <button onClick={this.handlePrefillForm}>Pre-Fill</button>
            </>
        )
    }
}