/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Bismillah from '@/assets/images/bismillah-1.svg';
import Bunga from '@/assets/images/bottom-2.png';

import Women from '@/assets/images/w.png';
import Man from '@/assets/images/l.png';
import Image from 'next/image';

// import { motion } from 'framer-motion';

// import { upVariants, leftVariants, rightVariants } from '../HoverStyle';

export default function Page2() {

    return (
        <div
            id="page_2" className={`handphone-width mx-auto position-relative h-100 text-dark`}>

            <div
                className=' position-relative h-100'>
                <div className='background-paper position-relative h-100' style={{ overflow: 'hidden' }}>

                    <Image src={Bunga} width="415" height="87" alt={'Bunga'} style={{ position: 'absolute', zIndex: 1, transform: 'translate(-50%, -70%) rotate(180deg)', left: '50%', top: '35px' }} />
                    <Image src={Bunga} width="415" height="87" alt={'Bunga'} style={{ position: 'absolute', zIndex: 1, transform: 'translate(-50%, 60%)', left: '50%', bottom: '35px' }} />

                    <div className='position-relative p-5 h-100 mt-3'>
                        {/* Main */}
                        <div
                            // initial="offscreen"
                            // whileInView="onscreen"
                            // viewport={{ once: true }}
                            className='row h-100 align-items-center'>
                            <div
                                // variants={upVariants}

                                className='col-12 text-center mb-4 wow bounceInDown'>
                                <Image src={Bismillah} width={200} height={30.05} alt={'Bismillah'} className={'mb-3'} />
                                <h3 style={{ fontFamily: 'Great Vibes' }}>Assalamu'alaikum Wr. Wb.</h3>
                                <div className='cormorant-regular' style={{ fontSize: '1rem', lineHeight: 1.2 }}>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri acara pernikahan kami:</div>
                            </div>
                            <div className='col-10'>
                                <div
                                    // ref={ref}
                                    // variants={leftVariants}
                                    className='text-center wow slideInLeft'>
                                    <Image src={Women} alt={'Arin Ayudiastika'} width={208} height={260} />

                                </div>
                            </div>
                            <div
                                // variants={rightVariants}

                                className='col-2 h-100 text-left cormorant-regular d-flex flex-column justify-content-between wow slideInRight' style={{ fontSize: '2rem' }}>
                                <div>B</div>
                                <div>R</div>
                                <div>I</div>
                                <div>D</div>
                                <div>E</div>
                            </div>
                            <div className='col-10 text-center'>
                                <div
                                    // variants={leftVariants}

                                    className=' py-3 wow slideInLeft'>
                                    <h5 className='' style={{ fontFamily: 'Great Vibes' }}>Arin Ayudiastika Efendi, S.T.</h5>
                                    <div className='' style={{ fontSize: '.8rem' }}>
                                        <span className='cormorant-regular'>
                                            Putri Pertama Bpk. H. Nendi Efendi dan Ibu Hj. Sri Gantini, S.Pd.I.,M.A
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-100 my-1' />
                            <div
                                // variants={leftVariants}

                                className='wow slideInLeft col-2 h-100 text-left cormorant-regular d-flex flex-column justify-content-between' style={{ fontSize: '2rem' }}>
                                <div>G</div>
                                <div>R</div>
                                <div>O</div>
                                <div>O</div>
                                <div>M</div>
                            </div>
                            <div className='col-10'>
                                <div
                                    // variants={rightVariants}

                                    className='text-center wow slideInRight'>
                                    <Image src={Man} alt={'Diana Yusup'} width={208} height={260} />
                                </div>
                            </div>
                            <div className='w-100' />
                            <div className='col-11 offset-2 text-center'>
                                <div
                                    // variants={rightVariants}

                                    className=' py-3 wow slideInRight'>
                                    <h5 className='' style={{ fontFamily: 'Great Vibes' }}>Diana Yusup, S.T.</h5>
                                    <div className='' style={{ fontSize: '.8rem' }}>
                                        <span className='cormorant-regular'>
                                            Putra Bungsu Bpk. Kamaludin dan Ibu Titi Nurhayati
                                        </span>
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