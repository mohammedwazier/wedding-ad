/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/Bunga - 1.png';
import BungaDown from '@/assets/images/Bunga - 2.png';

export default function Page3() {
    return (
        <div className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <div className=' position-relative h-100' >
                <div className='background-paper position-relative h-100'>

                    <div className='position-relative p-3 h-100' style={{ overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', right: '-1rem', top: '-1rem', zIndex: 1 }}>
                            <img src={BungaTop.src} style={{ width: '7rem' }} />
                        </div>
                        <div style={{ position: 'absolute', left: '-1rem', bottom: '-1rem', zIndex: 1 }}>
                            <img src={BungaDown.src} style={{ width: '7rem' }} />
                        </div>
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center mt-3'>
                            <div className='col-12'>
                                <div className='row justify-content-center'>
                                    <div className='col-12 text-center'>
                                        <span className='' style={{ fontSize: '2.5rem', fontFamily: 'Great Vibes' }}>Save the Date</span>
                                        <br />
                                        <span className='cormorant-regular' style={{ fontSize: '1.5rem' }}>Saturday</span>
                                    </div>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-3 als-script'>
                                                <h1 style={{ fontSize: '5rem', lineHeight: .5 }}>04</h1>
                                            </div>
                                            <div className='w-100' />
                                            <div className='col-3 offset-4 als-script'>
                                                <h1 style={{ fontSize: '5rem', lineHeight: .5 }}>03</h1>
                                            </div>
                                            <div className='w-100' />
                                            <div className='col-3 offset-7 als-script'>
                                                <h1 style={{ fontSize: '5rem', lineHeight: .5 }}>2023</h1>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='d-block d-md-none text-center als-script'>
                                        <h1 style={{ fontSize: '4rem', lineHeight: .5 }}>04 03 2023</h1>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className='row mt-4 justify-content-center align-items-center'>
                            <div className='col-12 my-2 text-center'>
                                <div style={{ background: '#AE8F7A', color: '#FFF', borderRadius: '20px' }} className="shadow-lg">
                                    <div className='p-3'>
                                        <span className='' style={{ fontSize: '3rem', fontFamily: 'Great Vibes' }}>Akad</span>
                                        <div className=''>
                                            {/* <i className="fa fa-clock-o"></i> */}
                                            {/* <br /> */}
                                            <span className='cormorant-regular'>
                                                <span style={{ fontSize: '1.8rem' }}>10:00</span>
                                                &nbsp;
                                                WIB
                                            </span>
                                            <p className='my-2 cormorant-semibold'>
                                                Alamat: Aula Masjid Jami Aliyah, Karawang Barat
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 my-2 text-center'>
                                <div style={{ background: '#AE8F7A', color: '#FFF', borderRadius: '20px' }} className="shadow-lg">
                                    <div className='p-3'>
                                        <span className='' style={{ fontSize: '3rem', fontFamily: 'Great Vibes' }}>Resepsi</span>
                                        <div className=''>
                                            {/* <i className="fa fa-clock-o"></i> */}
                                            {/* <br /> */}
                                            <span className='cormorant-regular'>
                                                <span style={{ fontSize: '1.8rem' }}>11:00 - 15:00</span>
                                                &nbsp;
                                                WIB
                                            </span>
                                            <p className='my-2 cormorant-semibold'>
                                                Alamat: Aula Masjid Jami Aliyah, Karawang Barat
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-100 my-2' />
                            <div className='col-md-8 col-sm-8 col-12'>
                                {/* <div className='card'>
                                    <div className='card-body cormorant-regular text-center'>
                                        <b>Lokasi : </b>
                                        <hr className='my-1' />
                                        <br />
                                        Masjid Jami Aliyah, Jl. International Karawang Barat No KM.03
                                    </div>
                                </div> */}

                                <div className='rounded-lg my-3'>
                                    <div className=''>
                                        {/* <center className='cormorant-regular'><b>Maps</b></center> */}
                                        {/* <hr className='my-1' /> */}
                                        <div className='position-relative'>
                                            <div className="mapouter" style={{ border: '5px solid #C39379' }}>
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