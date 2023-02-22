/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/Bunga - 1.png';
import BungaDown from '@/assets/images/Bunga - 2.png';

export default function Page3() {
    return (
        <div className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <div className='p-3 position-relative h-100' >
                <div className='background-paper position-relative h-100'>

                    <div className='position-relative p-3 p-md-5 h-100' style={{ overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', right: '-1rem', top: '-1rem', zIndex: 1 }}>
                            <img src={BungaTop.src} style={{ width: '7rem' }} />
                        </div>
                        <div style={{ position: 'absolute', left: '-1rem', bottom: '-1rem', zIndex: 1 }}>
                            <img src={BungaDown.src} style={{ width: '7rem' }} />
                        </div>
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className='col-12'>
                                <div className='row justify-content-center'>
                                    <div className='col-12 text-center'>
                                        <span className='als-script' style={{ fontSize: '1.5rem' }}>Save the Date</span>
                                    </div>
                                    <div className='d-none d-md-block col-lg-7 col-md-9 col-sm-12'>
                                        <div className='row'>
                                            <div className='col-3 als-script'>
                                                <h1 style={{ fontSize: '4rem', lineHeight: .5 }}>04</h1>
                                            </div>
                                            <div className='w-100 d-none d-md-block' />
                                            <div className='col-3 offset-md-4 als-script'>
                                                <h1 style={{ fontSize: '4rem', lineHeight: .5 }}>03</h1>
                                            </div>
                                            <div className='w-100 d-none d-md-block' />
                                            <div className='col-3 offset-md-8 als-script'>
                                                <h1 style={{ fontSize: '4rem', lineHeight: .5 }}>2023</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-block d-md-none text-center als-script'>
                                        <h1 style={{ fontSize: '4rem', lineHeight: .5 }}>04 03 2023</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-4 justify-content-center'>
                            <div className='col-md-4 col-sm-4 col-6 text-center'>
                                <span className='cormorant-bold'>Akad</span>
                                <div className='card rounded-lg shadow-sm'>
                                    <div className='card-body'>
                                        <i className="fa fa-clock-o"></i>
                                        <br />
                                        <span className='cormorant-regular'>10:00 <br />WIB</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-4 col-6 text-center'>
                                <span className='cormorant-bold'>Resepsi</span>
                                <div className='card rounded-lg shadow-sm'>
                                    <div className='card-body'>
                                        <i className="fa fa-clock-o"></i>
                                        <br />
                                        <span className='cormorant-regular'>11:00 - 15:00 <br />WIB</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-100 my-2' />
                            <div className='col-md-8 col-sm-8 col-12'>
                                <div className='card'>
                                    <div className='card-body cormorant-regular text-center'>
                                        <b>Lokasi : </b>
                                        <hr className='my-1' />
                                        <br />
                                        Masjid Jami Aliyah, Jl. International Karawang Barat No KM.03
                                    </div>
                                </div>

                                <div className='card rounded-lg my-3'>
                                    <div className='card-body'>
                                        <center className='cormorant-regular'><b>Maps</b></center>
                                        <hr className='my-1' />
                                        <div className='position-relative'>
                                            <div className="mapouter">
                                                <div className="gmap_canvas">
                                                    <iframe width="100%" height="100%" id="gmap_canvas" frameBorder={0} scrolling={'no'} src="https://maps.google.com/maps?q=Masjid Jami Aliyah, Jl. International Karawang Barat No KM.03&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='my-2'>
                                            <center>
                                                <a href="https://maps.google.com/maps?q=Masjid Jami Aliyah, Jl. International Karawang Barat No KM.03&t=&z=13&ie=UTF8" target={'_blank'} rel="noreferrer">
                                                    <button className='btn btn-sm btn-primary rounded-pill px-4'>
                                                        <i className='fa fa-map' /> Menuju Lokasi
                                                    </button>
                                                </a>
                                            </center>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}