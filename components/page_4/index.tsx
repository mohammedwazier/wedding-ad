/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import Bunga from '@/assets/images/bottom-2.svg';
// import User from '@/assets/images/user.png';

export default function Page4() {
    return (
        <div className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <div className='p-3 position-relative h-100'>
                <div className='background-paper position-relative h-100' style={{ overflow: 'hidden' }}>
                    {/* <img src={Bunga.src} style={{ width: '100%', position: 'absolute', zIndex: 1, transform: 'translate(-50%, -70%)rotate(180deg)', left: '50%', top: '35px' }} /> */}

                    {/* <img src={Bunga.src} style={{ width: '100%', position: 'absolute', zIndex: 1, transform: 'translate(-50%, 80%)', left: '50%', bottom: '35px' }} /> */}

                    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_kotaolcw.json" background="transparent" speed="1" style={{ width: '100%', height: '200px', position: 'absolute', zIndex: 1, bottom: '-10%' }} loop autoplay></lottie-player>
                    {/* <img src={IconTop.src} style={{ width: '5rem' }} /> */}
                    <div className='position-relative p-3 p-md-5 h-100' style={{ zIndex: 2 }}>
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className='col-12'>
                                <div className='row justify-content-center'>
                                    <div className='col-12 text-center'>
                                        <span className='cormorant-bold' style={{ fontSize: '1.5rem' }}>RSVP Wishes</span>

                                        <center>
                                            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_3hjvh1ex.json" background="transparent" speed="1" style={{ width: '4rem', height: '4rem' }} loop autoplay></lottie-player>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-4 justify-content-center'>
                            <div className='col-10'>
                                <div className='card rounded-lg'>
                                    <div className='' style={{ height: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
                                        {[0, 1, 2, 3, 4, 5, 6, 7].map((_v, key) => (
                                            <div key={key} className='card-body border border-light'>
                                                <div className='row'>
                                                    <div className='p-0 m-0 d-flex align-items-center' style={{ width: '4rem!important', }}>
                                                        <div className='rounded-circle als-script position-relative' style={{ background: '#be9898', width: '3.5rem', height: '3.5rem' }}>
                                                            <div className='text-light' style={{ position: 'absolute', left: '20%', top: '20%', fontSize: '2rem', textAlign: 'center' }}>
                                                                P
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col row'>
                                                        <div className='col-12 cormorant-bold'>
                                                            Nama
                                                        </div>
                                                        <div className='w-100 border-bottom' />
                                                        <div className='col-12 cormorant-light'>
                                                            <div className="row align-items-center h-100">
                                                                <div className="col text-warning">
                                                                    asdadads
                                                                </div>
                                                                <div className="col text-right" style={{ fontSize: '.8rem' }}>
                                                                    Datang
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>

                                <div className="card rounded-lg my-3">
                                    <div className="card-body text-center">
                                        <span className="cormorant-bold" style={{ fontSize: '1.5rem' }}>
                                            Buku Tamu & Ucapan
                                        </span>
                                        <br />
                                        <span className="cormorant-semibold" style={{ fontSize: '.8rem' }}>
                                            DOA RESTU ANDA MERUPAKAN KARUNIA YANG SANGAT BERARTI BAGI KAMI.
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="name"><i className="fa fa-user" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="text" className="form-control cormorant-light" placeholder="Masukkan Nama Anda" />
                                            </div>

                                            <div className="form-group">
                                                <textarea className="form-control cormorant-light" id="ucapan" rows={3} placeholder={'Masukkan Ucapan dan Doa anda'}></textarea>
                                            </div>

                                            <div className="form-group">
                                                <button className="btn cormorant-regular btn-block rounded-pill btn-success">Kirim ucapan</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}