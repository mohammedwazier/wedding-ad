/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/Bunga - 1.png';
import BungaDown from '@/assets/images/Bunga - 2.png';
// import { motion } from 'framer-motion';
// import IconTop from '@/assets/images/Icon AD - BG.png';

import IconAD from '@/assets/images/Icon-AD-New.png';
import Image from 'next/image';


export default function Page1() {
    return (
        <div className={`handphone-width mx-auto position-relative min-vh-100 text-dark`}>
            <div className=' position-relative vh-100'>
                <div className='background-paper position-relative h-100' style={{ overflow: 'hidden' }}>
                    <img src={BungaTop.src} style={{ width: '10rem', position: 'absolute', right: '-1rem', top: '-1rem', zIndex: 1 }} />
                    <img src={BungaDown.src} style={{ width: '10rem', position: 'absolute', left: '-1rem', bottom: '-1rem', zIndex: 1 }} />

                    <div className='position-relative p-1 h-100'>
                        {/* Main */}
                        <div
                            // initial={{ scale: 0 }}
                            // animate={{ rotate: 0, scale: 1 }}
                            // transition={{
                            //     type: "spring",
                            //     stiffness: 300,
                            //     damping: 15
                            // }}

                            className='row h-100 justify-content-center'>
                            <div className='col-12'>
                                <div className='row justify-content-center h-100'>
                                    <div className='col-12 text-center cormorant-semibold text-grey align-items-start' style={{ paddingTop: '20%' }}>
                                        <h3>The Wedding Of</h3>
                                    </div>
                                    <div className='col-12 text-center mb-3'>
                                        {/* <img src={IconAD.src} width={'350px'} /> */}
                                        <Image src={IconAD} alt={'Arin & Yusuf'} width={350} height={277} />
                                        <div className='als-script text-grey mt-5 position-relative mx-auto d-flex justify-content-around' style={{ fontSize: '4rem', width: '70%' }}>
                                            <div style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                04
                                            </div>
                                            <div style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                03
                                            </div>
                                            <div style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                23
                                            </div>
                                            {/* <h1>04 03 2023</h1> */}
                                        </div>
                                        {/* <h4 className='' style={{ lineHeight: 1, fontFamily: 'Italiana' }}>
                                            Arin Ayudiastika Efendi, S.T.
                                        </h4>
                                        <h4 className='als-script' style={{ lineHeight: 1, fontFamily: 'Italiana' }}>
                                            Diana Yusup, S.T.
                                        </h4> */}
                                    </div>
                                    <div className='col-12 text-center text-grey align-items-end mb-5'>
                                        <span className='cormorant-semibold'>TO:</span>
                                        <br />
                                        <span className='cormorant-bold' style={{ fontSize: '1.3rem' }}>Muhammad Waziruddin Akbar</span>
                                        <br />
                                        <br />
                                        <br />
                                        <span className='' style={{ fontSize: '1.8rem', fontFamily: 'Great Vibes' }}>I heartily invite you to our Wedding</span>
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