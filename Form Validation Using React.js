import { useState } from "react";

function Task1() {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")

    const [page, setPage] = useState("block")
    const [page1, setPage1] = useState("none")

    const [name1, setName1] = useState("")
    const [mail1, setMail1] = useState("")
    const [password, setPassword] = useState("")

    const changeName = (a) => {
        console.log(a.target.value)
        setName(a.target.value)
    }
    const changeMail = (a) => {
        console.log(a.target.value)
        setMail(a.target.value)
    }
    const changePass1 = (a) => {
        console.log(a.target.value)
        setPass1(a.target.value)
    }
    const changePass2 = (a) => {
        console.log(a.target.value)
        setPass2(a.target.value)
    }
    const submitData = () => {
        if (name.length <= 5) {
            alert("Name is too Short")
        }
        else if (pass1 != pass2) {
            alert("Password Does Not Match")
        }
        else {
            alert("The Form Submitted Successfully \n" + "Name:" + name + "\n" + "Email:" + mail + "\n" + "Password:" + pass1)
            localStorage.setItem("Name", name)
            localStorage.setItem("Email", mail)
            localStorage.setItem("Password", pass1)

        }

    }
    const logPage = () => {
        let a = "block" ? "none" : "block"
        setPage(a)
        let b = page1 == "none" ? "block" : "none"
        setPage1(b)
    }

    const changeName1 = (a) => {
        console.log(a.target.value)
        setName1(a.target.value)
    }
    const changeMail1 = (a) => {
        console.log(a.target.value)
        setMail1(a.target.value)
    }
    const changePassword = (a) => {
        console.log(a.target.value)
        setPassword(a.target.value)
    }

    let x=localStorage.getItem("Name")
    let y=localStorage.getItem("Email")
    let z=localStorage.getItem("Password")

    // localStorage.clear()

    const submitData1 = () => {
        if (x != name1) {
            alert("Wrong Credentials")
        }
        else if (y != mail1) {
            alert("Incorrect mail")
        }
        else if (z != password) {
            alert("Password Does Not Match")
        }
        else {
            alert("The Form Logined Successfully ")

        }

    }
 
    return (
        <div>
            <div className="container" style={{ width: "400px", paddingTop:"40px" }}>
                <div className="card" style={{ display: page }}>
                    <div className="card-title">
                        <h2 className="text-center"> Registration Form</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitData}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" value={name} onChange={changeName} class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" value={mail} onChange={changeMail} class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" value={pass1} onChange={changePass1} class="form-control" required id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input type="password" value={pass2} onChange={changePass2} class="form-control" required id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form><br />
                    </div>
                    <button style={{ border: "none" }} onClick={logPage}>Click here To Login Page</button>

                </div>
                <div className="card" style={{ display: page1 }}>
                    <div className="card-title">
                        <h2 className="card-title"> Log In</h2>
                        <div className="card-body">
                            <form onSubmit={submitData1}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="text" value={name1} onChange={changeName1} class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" value={mail1} onChange={changeMail1} class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" value={password} onChange={changePassword} class="form-control" required id="exampleInputPassword1" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button> <br/>
                                <p> Refresh The Page To Go Registration Page</p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Task1;
