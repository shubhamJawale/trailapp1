import { useState } from "react";


export default function Form()
{
let [userlist, setuserlist] = useState([]);

let [username, setusername] = useState();
let [password, setpassword] = useState();
let [confirmpassword, setcpassword] = useState();
let [email, setemail] =useState();

let usernameinp = (e) => setusername(e.target.value);
let emailinp = (e) => setemail(e.target.value);
let passwordinp = (e) => setpassword(e.target.value);
let cpasswordinp = (e) => setcpassword(e.target.value);

let rst = () => {
    setuserlist([]);
}
let createuser = () =>
{
    let addnewuser = 
    {
        name: username,
        password:password,
        email: email,
    }

    if(username && password && email){
        let newlist = [addnewuser, ...userlist];
    setuserlist(newlist);
    setusername("");
    setemail("");
    setpassword("");
   setcpassword("");
    }
}



return (
    <div className="mx-3">
        <form className="">
        <div>
                <input type="text" name="" id="" placeholder="Name" onChange={usernameinp} value={username} className="form-control mt-3"/>
        </div>

        <div>
                <input type="email" name="" id="" placeholder="email" onChange={emailinp}  value={email} className="form-control mt-3"/>
        </div>
        <div>
               <input type="password" name="" id=""  placeholder="password" onChange={passwordinp} value={password} className="form-control mt-3"/>
        </div>
        <div>
                <input type="password" name="" id="" placeholder="confirm-password"  onChange={cpasswordinp} value={confirmpassword} className="form-control mt-3"/>
        </div>
        <div className="p-1">
                <input type="button" value="register" className="btn btn-outline-dark mt-3 w-100" onClick={createuser}/>
        </div>

        </form>
    <div className="mt-2 border border-dark">
        <table className="table table-dark table-striped caption-top">
          <thead>
           <tr> <th>Username</th><th>Email</th><th>Password</th></tr>
           </thead>
            <tbody>
            {userlist.map((item)=>{
               return ( <tr>
                    <td>
                    {item.name}
                    </td>
                    <td>
                    {item.email}
                    </td>
                    <td>
                    {item.password}
                    </td>
                </tr>)
            })}    
            </tbody>          
        </table>
        <div>
            <button className="btn btn-dark" onClick={rst}>
                Reset List
            </button>
        </div>
    </div>
    </div>
)









}