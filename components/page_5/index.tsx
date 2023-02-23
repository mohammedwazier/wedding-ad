/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/top-right-3.svg';
import BungaDown from '@/assets/images/bottom-left-3.svg';

import Mask from '@/assets/images/New Prokes/face-mask.png';
import AntiSeptic from '@/assets/images/New Prokes/antiseptic.png';
import Social from '@/assets/images/New Prokes/distance.png';

import LBelakang from '@/assets/images/l-belakang.jpg';
import WBelakang from '@/assets/images/w-belakang.jpg';

// import Wave from '@/assets/images/wave.svg';

export default function Page5() {
    return (
        <div className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <div className=' position-relative h-100' >
                <div className='background-paper position-relative h-100'>

                    <div className='position-relative p-3 p-md-5 h-100' style={{ overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', right: '-5%', top: '-5%', zIndex: 1 }}>
                            <img src={BungaTop.src} style={{ width: '7rem' }} />
                        </div>
                        <div style={{ position: 'absolute', left: '-12%', bottom: '-5%', zIndex: 1 }}>
                            <img src={BungaDown.src} style={{ width: '7rem' }} />
                        </div>
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className='col-12'>
                                <div className='row justify-content-center mt-4'>
                                    {/* <div className='col-12 text-center'>
                                        <span className='' style={{ fontSize: '1.7rem', fontFamily: 'Great Vibes' }}>Terima kasih dan ditunggu kehadirannya</span>
                                    </div> */}
                                    <div className='position-relative'>
                                        <img className='shadow-sm' src={LBelakang.src} style={{ width: '100px', border: '1px solid #AE8F7A', borderRadius: '50%' }} />
                                        <img className='shadow-sm' src={WBelakang.src} style={{ width: '100px', border: '1px solid #AE8F7A', borderRadius: '50%' }} />
                                    </div>
                                    <div className='col-11 mt-4 text-center cormorant-regular position-relative' style={{ zIndex: '2' }} >
                                        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/Saudari berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                                        <br />
                                        <br />
                                        <br />
                                        <span style={{ fontFamily: 'Great Vibes', color: '#947a68', fontSize: '2rem' }}>Arin & Yusup</span>
                                    </div>
                                    {/* <div className='w-100' /> */}
                                    <div className='col-12 mb-4 mt-2'>
                                        <div className='rounded-lg position-relative' style={{ background: 'rgba(174, 143, 122, .7)', color: '#FFF', zIndex: 2 }}>
                                            <div className='card-body cormorant-light text-center' style={{ fontSize: '.8rem' }}>
                                                Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
                                                <br />
                                                <br />
                                                (Q.S Ar Rum : 21)
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 position-relative w-100 mb-4 pb-4 mt-3' style={{ zIndex: 4 }}>
                                        <div className='row text-center justify-content-center'>
                                            <div className='col'>
                                                <div style={{ background: '#d2ae96', width: '50px', height: '50px', borderRadius: '50%' }} className=" mx-auto position-relative d-flex justify-content-center align-items-center">
                                                    <img src={AntiSeptic.src} style={{ width: '30px', height: '30px' }} />
                                                </div>
                                                <span className='cormorant-bold' style={{ fontSize: '.5rem', color: '#714f39' }}>
                                                    Gunakan Handsanitizer
                                                </span>
                                            </div>
                                            <div className='col'>
                                                <div style={{ background: '#d2ae96', width: '50px', height: '50px', borderRadius: '50%' }} className=" mx-auto position-relative d-flex justify-content-center align-items-center">
                                                    <img src={Mask.src} style={{ width: '30px', height: '30px' }} />
                                                </div>
                                                <span className='cormorant-bold' style={{ fontSize: '.5rem', color: '#714f39' }}>
                                                    Gunakan Masker
                                                </span>
                                            </div>
                                            <div className='col'>
                                                <div style={{ background: '#d2ae96', width: '50px', height: '50px', borderRadius: '50%' }} className=" mx-auto position-relative d-flex justify-content-center align-items-center">
                                                    <img src={Social.src} style={{ width: '30px', height: '30px' }} />
                                                </div>
                                                <span className='cormorant-bold' style={{ fontSize: '.5rem', color: '#714f39' }}>
                                                    Jaga Jarak
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='w-100' />
                                    <div className='col-11 mb-4'>
                                        <div className='card rounded-lg'>
                                            <div className='card-body'>
                                                <center>
                                                    <h4 className='cormorant-bold'>Protokol Kesehatan & Anjuran</h4>
                                                    <h6 className='cormorant-regular text-muted'>Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan untuk mematuhi Protokol Kesehatan di bawah ini :</h6>
                                                </center>
                                            </div>
                                            <div className='card-body row justify-content-between cormorant-light'>
                                                <div className='col text-center'>
                                                    <img src={Masker.src} style={{ width: '3rem' }} />
                                                    Menggunakan Masker
                                                </div>
                                                <div className='col text-center'>
                                                    <img src={WashHand.src} style={{ width: '3rem' }} />
                                                    Mencuci Tangan pakai Sabun
                                                </div>
                                                <div className='col text-center'>
                                                    <img src={SocialDistance.src} style={{ width: '3rem' }} />
                                                    Menjaga Jarak
                                                </div>
                                                <div className='col text-center'>
                                                    <img src={Crowd.src} style={{ width: '3rem' }} />
                                                    Menghindari Kerumunan
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}