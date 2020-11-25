import Header from "../layout/Header";
import './searchClinic.css'
import rsh from '../img/image 4.png'
import { useEffect, useState } from "react";
import Axios from "axios";
import search from '../img/search.svg'
import Footer from '../layout/Footer'
import { ClickAwayListener } from "@material-ui/core";

const SearchClinic = () => {

    const [isLoading, setIsLoading] = useState(false)

    const [clinics, setClinics] = useState([])
    useEffect(() => {
        setIsLoading(true)
        Axios.get('https://5fbcb4963f8f90001638c271.mockapi.io/search')
            .then(res => {
                setClinics(res.data)
                setIsLoading(true)
            })
    }, [])

    const [city, setCity] = useState('all')
    const handleOnClick = (e) => {
        e.preventDefault()
        setCity(e.target.id)
        console.log(e.target.id)
    }

    const [searched, setSearched] = useState(' ')
    const handleSubmit = e => {
        e.preventDefault()
        setSearched(submitted)
        console.log(searched)
    }

    const [submitted, setSubmitted] = useState('')
    const handlerChange = e => {
        setSubmitted(e.target.value)
    }

    const [pet, setPet] = useState('all')
    const handlerKoceng = e => {
        setPet(e.target.id)
    }

    return (
        <div>
            <Header />
            <br /><br /><br /> <br />
            <div className='container'>
                <div className="d-flex search-tool">
                    <div className="dropdown mr-1">
                        <button type="button" className="btn btn-secondary dropdown-toggle btn-lokasi" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                            {city === 'all' ? 'Lokasi' : city}</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <a className="dropdown-item" id='all' onClick={e => handleOnClick(e, 'id')}>Semua Lokasi</a>
                            <a className="dropdown-item" id='Jakarta' onClick={e => handleOnClick(e, 'id')}>Jakarta</a>
                            <a className="dropdown-item" id='Surabaya' onClick={e => handleOnClick(e, 'id')}>Surabaya</a>
                            <a className="dropdown-item" id='Batam' onClick={e => handleOnClick(e, 'id')}>Batam</a>
                        </div>
                    </div>
                    <div className="dropdown mr-1">
                        <button type="button" className="btn btn-secondary dropdown-toggle btn-pet" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                            {pet === 'all' ? 'Hewan Peliharaan' : pet}</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <a className="dropdown-item" id='all' onClick={e => handlerKoceng(e, 'id')}>Semua</a>
                            <a className="dropdown-item" id='anjing' onClick={e => handlerKoceng(e, 'id')}>Anjing</a>
                            <a className="dropdown-item" id='kucing' onClick={e => handlerKoceng(e, 'id')}>Kucing</a>
                        </div>
                    </div>
                    <div className="search-input">
                        <form onSubmit={e => handleSubmit(e, 'value')}>
                            <img src={search} alt="search" />
                            <input type="text" placeholder='Cari Sekarang' onChange={handlerChange} />
                        </form>

                    </div>
                </div>

                <div className="row">
                    {pet === city ?
                        clinics.filter(clinic => clinic.namaKlinik.toLowerCase().includes(searched)).length > 0 ? clinics.filter(clinic => clinic.namaKlinik.toLowerCase().includes(searched)).map(clinic =>
                            <div className="col-3">
                                <div className="card-search">
                                    <div className="card">
                                        <img src={rsh} className="card-img-top" alt="ottoke" />
                                        <div className="card-body">
                                            <button className='btn-loc'>{clinic.kota}</button>
                                            <h5 className="card-title">{clinic.namaKlinik}</h5>
                                            <p className="card-text">{clinic.jamOperasional}</p>
                                            <a href="#" className="btn btn-block booknow">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>) :
                            <div>
                                <br /><br /><br />
                                <h1 style={{ position: 'relative', left: '20vw' }}>Pencarian Tidak Ditemukan</h1><br /><br /><br /><br /><br /><br />
                            </div>
                        :
                        pet === 'all' ? clinics.filter(clinic => clinic.kota === city).filter(clinic => clinic.namaKlinik.toLowerCase().includes(searched)).length > 0 ? clinics.filter(clinic => clinic.kota === city).filter(clinic => clinic.namaKlinik.toLowerCase().includes(searched)).map(clinic =>
                            <div className="col-3">
                                <div className="card-search">
                                    <div className="card">
                                        <img src={rsh} className="card-img-top" alt="ottoke" />
                                        <div className="card-body">
                                            <button className='btn-loc'>{clinic.kota}</button>
                                            <h5 className="card-title">{clinic.namaKlinik}</h5>
                                            <p className="card-text">{clinic.jamOperasional}</p>
                                            <a href="#" className="btn btn-block booknow">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <div>
                                <br /><br /><br />
                                <h1 style={{ position: 'relative', left: '20vw' }}>Pencarian Tidak Ditemukan</h1><br /><br /><br /><br /><br /><br />
                            </div>
                            :
                            city === 'all' ? clinics.filter(clinic => clinic.pasien.includes(pet)).filter(clinic => clinic.namaKlinik.toLowerCase().includes(searched)).length > 0 ? clinics.filter(clinic => clinic.pasien.includes(pet)).filter(clinic => clinic.namaKlinik.toLowerCase().includes(searched)).map(clinic =>
                                <div className="col-3">
                                    <div className="card-search">
                                        <div className="card">
                                            <img src={rsh} className="card-img-top" alt="ottoke" />
                                            <div className="card-body">
                                                <button className='btn-loc'>{clinic.kota}</button>
                                                <h5 className="card-title">{clinic.namaKlinik}</h5>
                                                <p className="card-text">{clinic.jamOperasional}</p>
                                                <a href="#" className="btn btn-block booknow">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : <div>
                                    <br /><br /><br />
                                    <h1 style={{ position: 'relative', left: '20vw' }}>Pencarian Tidak Ditemukan</h1><br /><br /><br /><br /><br /><br />
                                </div>
                                :
                                clinics.filter(clinic => clinic.pasien.includes(pet) && clinic.kota === city && clinic.namaKlinik.toLowerCase().includes(searched)).length > 0 ?
                                    clinics.filter(clinic => clinic.pasien.includes(pet) && clinic.kota === city && clinic.namaKlinik.toLowerCase().includes(searched)).map(clinic => <div className="col-3">
                                        <div className="card-search">
                                            <div className="card">
                                                <img src={rsh} className="card-img-top" alt="ottoke" />
                                                <div className="card-body">
                                                    <button className='btn-loc'>{clinic.kota}</button>
                                                    <h5 className="card-title">{clinic.namaKlinik}</h5>
                                                    <p className="card-text">{clinic.jamOperasional}</p>
                                                    <a href="#" className="btn btn-block booknow">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                    : <div>
                                        <br /><br /><br />
                                        <h1 style={{ position: 'relative', left: '20vw' }}>Pencarian Tidak Ditemukan</h1><br /><br /><br /><br /><br /><br />
                                    </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SearchClinic;