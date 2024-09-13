import React, {useState, useEffect, Fragment} from "react";
//fragment adalah komponen untuk mengelomopkkan
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";


const Personil = () => {
    const [dataPersonil, setDataPersonil] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch ('http://127.0.0.1:8000/api/personil',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new error(`HTTP error ! Status: ${response.status}`)
                }
                const data = await response.json();
                if (Array.isArray(data.data)) {
                    setDataPersonil(data.data);
                } else {
                    setError("Data tidak dapat diambil");
                }
            } catch (error) {
                setError(`Error | status: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Fragment>
            <Navbar />
            <div id="layoutSidenav">
            <Sidebar />
            <div id="layoutSidenav_content">

            {/* isi/main buat personil */}
            <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Tabel Data Personil</h1>

                    {/* Letak table personil */}
                    <div class="card mb-4">
                        <div className="card-header">
                            <Link to="/tambah_personil" className="btn btn-success">
                                Tambah
                            </Link>
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Alamat</th>
                                            <th>Kesatuan</th>
                                            <th>Agama</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>Name</th>
                                        <th>Alamat</th>
                                        <th>Kesatuan</th>
                                        <th>Agama</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                    {dataPersonil.map(personil => 
                                        <tr key={personil.id}>
                                            <td>{personil.nama}</td>
                                            <td>{personil.alamat}</td>
                                            <td>{personil.kesatuan}</td>
                                            <td>{personil.agama}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/*  */}

                </div>
            </main>

            <Footer />    
            </div>
            </div>
        </Fragment>
    );
};

export default Personil;