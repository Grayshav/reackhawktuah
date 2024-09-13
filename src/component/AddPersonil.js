import React, { Fragment, useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";

const AddPersonil = () => {
    const [formData, setFormData] = useState({
        nama: '',
        alamat: '',
        agama_id: '',
        kesatuan_id: '',
    });
    const [error, setError] = useState(null);
    const nav = useNavigate();

    //bantu ketika menginput form
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    //bantu ketika proses submit data
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

    // memanggil form data untuk menambahkn data baru
    const formDataSubmit = new FormData();
    Object.keys(formData).forEach(key => {
        formDataSubmit.append(key, formData[key]);
    });

    const token = localStorage.getItem('token');
    try {

        const response = await fetch('http://127.0.0.1:8000/api/create_personil' ,{
            headers: {
                        'Authorization': `Bearer ${token}`
                    },
            method: 'POST',
            body: formDataSubmit
        });
        if (!response.ok)
        {
            throw new Error(`HTTP error ! Status ${response.status}`);
        }
        alert('Personil ditambahknan');
        nav('/personil');
    }
    catch (err){
        setError(err.message);
    };
}
    
    return (
        <Fragment>
            <Navbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <h1>Tambah Personil</h1>
                                {/* <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="inputNama" type="text" placeholder="Masukkan Nama Anda Disini" />
                                                            <label for="inputNama">Nama</label>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="inputNIK" type="number" placeholder="Masukkan NIK Anda" />
                                                                    <label for="inputNIK">NIK</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="inputNoWA" type="text" placeholder="Masukkan Nomor Telpon yang Terhubung dengan WA" />
                                                                    <label for="inputNoWA">No WA</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="inputPassword" type="password" placeholder="Create a password" />
                                                                    <label for="inputPassword">Password</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                                    <label for="inputPasswordConfirm">Confirm Password</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 mb-0">
                                                            <div class="d-grid"><a class="btn btn-primary btn-block" href="login.html">Create Account</a></div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="card-footer text-center py-3">
                                                    <div class="small"><a href="login.html">Have an account? Go to login</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <form onSubmit={handleSubmit} className="form">
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Alamat</label>
                                    <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Agama</label>
                                    <input type="text" name="agama_id" value={formData.agama_id} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Kesatuan</label>
                                    <input type="text" name="kesatuan_id" value={formData.kesatuan_id} onChange={handleChange} className="form-control" required />
                                </div>
                            <button type="submit" className="btn btn-primary mt-3">Button</button>
                            </form>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </Fragment>
    );
};

export default AddPersonil;
