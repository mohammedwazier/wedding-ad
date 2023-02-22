/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion'

import Bunga from '@/assets/images/bottom-2.svg';
// import IconTop from '@/assets/images/Icon AD - BG.png';

import Women from '@/assets/images/w.jpg';
import Man from '@/assets/images/l.jpg';

export default function Page2() {
    return (
        <div className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <div className='p-3 position-relative h-100'>
                <div className='background-paper position-relative h-100' style={{ overflow: 'hidden' }}>
                    <img src={Bunga.src} style={{ width: '100%', position: 'absolute', zIndex: 1, transform: 'translate(-50%, -70%)rotate(180deg)', left: '50%', top: '35px' }} />

                    <img src={Bunga.src} style={{ width: '100%', position: 'absolute', zIndex: 1, transform: 'translate(-50%, 60%)', left: '50%', bottom: '35px' }} />
                    {/* <img src={IconTop.src} style={{ width: '5rem' }} /> */}
                    <div className='position-relative p-5 h-100'>
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className='col-12 dancing-script text-center mb-4'>
                                <h2>Assalamu'alaikum Wr. Wb.</h2>
                                <span className='cormorant-regular' style={{ fontSize: '.8rem' }}>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri acara pernikahan kami:</span>
                            </div>
                            <div className='col-9'>
                                <div className='text-center'>
                                    <img src={Women.src} style={{ width: '13rem' }} />
                                    <div className=' py-3'>
                                        <h5 className='als-script'>Arin Ayudiastika Efendi, S.T.</h5>
                                        <div className='' style={{ fontSize: '.8rem' }}>
                                            <span className='cormorant-bold'>
                                                Putri Pertama dari
                                            </span>
                                            <br />
                                            <span className='cormorant-regular'>
                                                <b>Bpk. H. Nendi Efendi</b> dan <b>Ibu Hj. Sri Gantini, S.Pd.I.,M.A</b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3 text-left cormorant-regular'>
                                B<br />
                                R<br />
                                I<br />
                                D<br />
                                E<br />
                                {/* S<br /> */}
                            </div>
                            <div className='w-100' />
                            <div className='col-3 text-right cormorant-regular'>
                                G<br />
                                R<br />
                                O<br />
                                O<br />
                                M<br />
                                {/* S<br /> */}
                            </div>
                            <div className='col-9'>
                                <div className='text-center'>
                                    <img src={Man.src} style={{ width: '13rem' }} />
                                    <div className=' py-3'>
                                        <h5 className='als-script'>Diana Yusup, S.T.</h5>
                                        <div className='' style={{ fontSize: '.8rem' }}>
                                            <span className='cormorant-bold'>
                                                Putra Bungsu dari
                                            </span>
                                            <br />
                                            <span className='cormorant-regular'>
                                                <b>Bpk. Kamaludin</b> dan <b>Ibu Titi Nurhayati</b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div style={{ position: 'absolute', left: '-1rem', bottom: '-1rem', zIndex: 1 }}>
                    <img src={BungaDown.src} style={{ width: '7rem' }} />
                </div> */}
            </div>
        </div>
    )
}