/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/top-right-3.svg';
import BungaDown from '@/assets/images/bottom-left-3.svg';

import Masker from '@/assets/images/Prokes/masker.png';
import WashHand from '@/assets/images/Prokes/wash-hand.png';
import SocialDistance from '@/assets/images/Prokes/social-distance.png';
import Crowd from '@/assets/images/Prokes/crowd.png';

// import BungaTop from 

export default function Page5() {
    return (
        <div className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <div className='p-3 position-relative h-100' >
                <div className='background-paper position-relative h-100'>

                    <div className='position-relative p-3 p-md-5 h-100' style={{ overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', right: '-5%', top: '-5%', zIndex: 1 }}>
                            <img src={BungaTop.src} style={{ width: '7rem' }} />
                        </div>
                        <div style={{ position: 'absolute', left: '-5%', bottom: '-5%', zIndex: 1 }}>
                            <img src={BungaDown.src} style={{ width: '7rem' }} />
                        </div>
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className='col-12'>
                                <div className='row justify-content-center mt-4'>
                                    <div className='col-12 text-center'>
                                        <span className='als-script' style={{ fontSize: '1.7rem' }}>Terima kasih dan ditunggu kehadirannya</span>
                                    </div>
                                    {/* <div className='w-100' /> */}
                                    <div className='col-10 my-4'>
                                        <div className='card rounded-lg'>
                                            <div className='card-body cormorant-light text-center'>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae vel fugit, consectetur iste assumenda ducimus placeat ipsum quas ea rerum, eius laudantium ipsam nam in eaque eligendi molestias? Voluptates, minus.
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-100' />
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