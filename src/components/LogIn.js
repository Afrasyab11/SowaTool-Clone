import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../style/LogIn.css';




const LogIn = () => {


    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [required, setrequired] = useState('');

    const navigate = useNavigate();

    const newEntry = { email, password };

    const Submitlogin = (e) => {
        e.preventDefault();
        navigate('/Shop-By-Brand')

        // let RegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        // if (RegEx.test(email)) {

        //         console.log(newEntry)
        //         setrequired('')
        //         navigate('/Shop-By-Brand')

        // }
        // else {
        //     setrequired(" *Please match format")
        // }


    }

    return (
        <div>

            <form className="LogIn" >
                <h1 className="text">LogIn</h1>
                <div >
                    <input className="input" autoComplete="false" placeholder="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    >
                    </input><br></br>
                    {required}
                </div>


                <div >
                    <input className="input" type="password" name="password" id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div><br></br>

                <button className="button" type="submit" onClick={Submitlogin} >Login</button><br></br>

                <label className="Ulabel">Already a user?</label>
                <Link className='Lin' to='/Register'>SIGNUP</Link>
            </form>

        </div>
    )
}
export default LogIn;