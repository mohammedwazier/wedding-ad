/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/Bunga - 1.png';
import BungaDown from '@/assets/images/Bunga - 2.png';
import IconTop from '@/assets/images/Icon AD - BG.png';

export default function Page1() {
    return (
        <div className={`handphone-width mx-auto position-relative min-vh-100 text-dark`}>
            <div className='p-3 position-relative vh-100'>
                <div style={{ position: 'absolute', right: '-1rem', top: '-1rem', zIndex: 1 }}>
                    <img src={BungaTop.src} style={{ width: '7rem' }} />
                </div>
                <div className='background-paper position-relative h-100'>
                    {/* <img src={IconTop.src} style={{ width: '5rem' }} /> */}
                    <div className='position-relative p-3 h-100'>
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className='col-12'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-7 col-md-9 col-xs-12 text-md-left text-center'>
                                        <h4 className='als-script'>
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
                                        <h4 className='als-script'>
                                            Diana Yusup, S.T.
                                        </h4>
                                    </div>
                                    <div className='w-100' />
                                    <div className='col-12 text-center cormorant-regular'>
                                        TO: <span className='cormorant-bold' style={{ textDecoration: 'underline' }}>Muhammad Waziruddin Akbar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ position: 'absolute', left: '-1rem', bottom: '-1rem', zIndex: 1 }}>
                    <img src={BungaDown.src} style={{ width: '7rem' }} />
                </div>
            </div>
        </div>
    )
}