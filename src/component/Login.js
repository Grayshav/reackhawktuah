import React, { Fragment, useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Footer from "../frontend/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../frontend/Header";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState(null);
    const nav = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://127.0.0.1:8000/api/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });
            const data = await response.json();
            if(response.ok && data.status === 'success'){
                //simpen 
                
                localStorage.setItem('token', data.token);
                alert('bener!');
                nav('/personil');
            }
            else {
            alert('gagal!');

                setError(data.message || 'Login gagal');
            }
        }
        catch (err) {
            setError(err.message);
        }
    }


    return (
        <Fragment>
            {/* <Navbar />
            <div id="layoutSidenav">
                {/* <Sidebar /> */}
                {/* <div id="layoutSidenav_content"> */}
                <Header />
                    <main>
                        <div class="container-fluid px-4 justify-content-center col-md-6">
                            <h1 className="text-center mb-3 mt-2">LOGIN</h1>

                            <form onSubmit={handleLogin}>
                                <div class="mb-3 mt-2">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email"
                                     class="form-control"
                                      id="exampleInputEmail1" 
                                      name="email" 
                                      value={email} 
                                      onChange={(e) => setEmail(e.target.value)} 
                                      aria-describedby="emailHelp" 
                                      required/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" name="pass" value={password} onChange={(e) => setPass(e.target.value)} id="exampleInputPassword1" required   />
                                </div>
                                <button type="submit" class="btn btn-primary mb-5">Submit</button>
                            </form>
                        </div>
                    </main>
                    <Footer />
                {/* </div>
            </div> */}
        </Fragment>
    );
};

export default Login;