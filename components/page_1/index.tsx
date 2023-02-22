/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/Bunga - 1.png';
import BungaDown from '@/assets/images/Bunga - 2.png';
import { motion } from 'framer-motion';
// import IconTop from '@/assets/images/Icon AD - BG.png';

export default function Page1() {
    return (
        <div className={`handphone-width mx-auto position-relative min-vh-100 text-dark`}>
            <div className='p-3 position-relative vh-100'>
                <div className='background-paper position-relative h-100' style={{ overflow: 'hidden' }}>
                    <img src={BungaTop.src} style={{ width: '7rem', position: 'absolute', right: '-1rem', top: '-1rem', zIndex: 1 }} />
                    <img src={BungaDown.src} style={{ width: '7rem', position: 'absolute', left: '-1rem', bottom: '-1rem', zIndex: 1 }} />

                    <div className='position-relative p-3 h-100'>
                        {/* Main */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15
                            }}

                            className='row h-100 justify-content-center align-items-center'>
                            <div className='col-12'>
                                <div className='row justify-content-center'>
                                    <div className='col-12 text-center cormorant-semibold-italic mb-4'>
                                        <i><h3>The Wedding Of</h3></i>
                                    </div>
                                    <div className='col-lg-7 col-md-9 col-xs-12 text-md-left text-center'>
                                        <h4 className='als-script' style={{ lineHeight: 1 }}>
                                            Arin Ayudiastika Efendi, S.T.
                                        </h4>
                                    </div>
                                    <div className='w-100' />
                                    {/* <div className='col-lg-7 col-md-9 col-xs-12 text-center '>
                                        <span style={{ fontSize: '4rem', top: '-3rem' }} className='position-absolute'>
                                            &
                                        </span>
                                    </div>
                                    <div className='w-100'></div> */}
                                    <div className='col-lg-7 col-md-9 col-xs-12 text-md-right text-center'>
                                        <h4 className='als-script' style={{ lineHeight: 1 }}>
                                            Diana Yusup, S.T.
                                        </h4>
                                    </div>
                                    <div className='w-100' />
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
                                    <div className='w-100' />
                                    <div className='col-12 text-center cormorant-regular py-3'>
                                        TO: <span className='cormorant-bold' style={{ textDecoration: 'underline' }}>Muhammad Waziruddin Akbar</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </div>
    )
}