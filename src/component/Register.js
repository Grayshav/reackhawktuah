import React, { Fragment, useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Footer from "../frontend/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../frontend/Header";

const Register = () => {

    const [formRegis, setFormRegister] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const nav = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormRegister({ ...formRegis, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const formRegisSubmit = new FormData();
        Object.keys(formRegis).forEach(key => {
            formRegisSubmit.append(key, formRegis[key]);
        })

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                body: formRegisSubmit
            });
            if (!response.ok) {
                throw new Error(`HTTP error ! Status ${response.status}`)
            }
            alert('berhasil regis')
            nav('/login');
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

                    <form onSubmit={handleSubmit}>
                        <div class="mb-3 mt-2">
                            <label for="exampleInputEmail1" class="form-label">Nama</label>
                            <input type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="name"
                                value={formRegis.name}
                                onChange={handleChange}
                                aria-describedby="emailHelp"
                                required />
                            <div id="emailHelp" class="form-text">Budiman?</div>
                        </div>
                        <div class="mb-3 mt-2">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="email"
                                value={formRegis.email}
                                onChange={handleChange}
                                aria-describedby="emailHelp"
                                required />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" value={formRegis.password} onChange={handleChange} id="exampleInputPassword1" required />
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

export default Register;