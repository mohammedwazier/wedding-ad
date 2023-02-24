/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Bismillah from '@/assets/images/bismillah-1.svg';

import Bunga from '@/assets/images/bottom-2.svg';

import Women from '@/assets/images/w.png';
import Man from '@/assets/images/l.png';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { upVariants, leftVariants, rightVariants } from '../HoverStyle';

export default function Page2() {

    const upVariants = {
        onscreen: {
            y: [-200, 0], opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        offscreen: { opacity: 0 }
    }


    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            id="page_2" className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <div className=' position-relative h-100'>
                <div className='background-paper position-relative h-100' style={{ overflow: 'hidden' }}>

                    <Image src={Bunga} width="415" height="87" alt={'Bunga'} style={{ position: 'absolute', zIndex: 1, transform: 'translate(-50%, -70%) rotate(180deg)', left: '50%', top: '35px' }} />
                    <Image src={Bunga} width="415" height="87" alt={'Bunga'} style={{ position: 'absolute', zIndex: 1, transform: 'translate(-50%, 60%)', left: '50%', bottom: '35px' }} />

                    <div className='position-relative p-5 h-100 mt-3'>
                        {/* Main */}
                        <div className='row h-100 align-items-center'>
                            <motion.div
                                variants={upVariants}

                                className='col-12 text-center mb-4'>
                                <Image src={Bismillah} width={200} height={30.05} alt={'Bismillah'} className={'mb-3'} />
                                <h3 style={{ fontFamily: 'Great Vibes' }}>Assalamu'alaikum Wr. Wb.</h3>
                                <div className='cormorant-regular' style={{ fontSize: '1rem', lineHeight: 1.2 }}>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri acara pernikahan kami:</div>
                            </motion.div>
                            <div className='col-10'>
                                <motion.div
                                    // ref={ref}
                                    variants={leftVariants}
                                    className='text-center'>
                                    <Image src={Women} alt={'Arin Ayudiastika'} width={208} height={260} />

                                </motion.div>
                            </div>
                            <motion.div
                                variants={rightVariants}

                                className='col-2 h-100 text-left cormorant-regular d-flex flex-column justify-content-between' style={{ fontSize: '2rem' }}>
                                <div>B</div>
                                <div>R</div>
                                <div>I</div>
                                <div>D</div>
                                <div>E</div>
                            </motion.div>
                            <div className='col-10 text-center'>
                                <motion.div
                                    variants={leftVariants}

                                    className=' py-3'>
                                    <h5 className='' style={{ fontFamily: 'Great Vibes' }}>Arin Ayudiastika Efendi, S.T.</h5>
                                    <div className='' style={{ fontSize: '.8rem' }}>
                                        <span className='cormorant-regular'>
                                            Putri Pertama Bpk. H. Nendi Efendi dan Ibu Hj. Sri Gantini, S.Pd.I.,M.A
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                            <div className='w-100 my-1' />
                            <motion.div
                                variants={leftVariants}

                                className='col-2 h-100 text-left cormorant-regular d-flex flex-column justify-content-between' style={{ fontSize: '2rem' }}>
                                <div>G</div>
                                <div>R</div>
                                <div>O</div>
                                <div>O</div>
                                <div>M</div>
                            </motion.div>
                            <div className='col-10'>
                                <motion.div
                                    variants={rightVariants}

                                    className='text-center'>
                                    <Image src={Man} alt={'Diana Yusuf'} width={208} height={260} />
                                </motion.div>
                            </div>
                            <div className='w-100' />
                            <div className='col-11 offset-2 text-center'>
                                <motion.div
                                    variants={rightVariants}

                                    className=' py-3'>
                                    <h5 className='' style={{ fontFamily: 'Great Vibes' }}>Diana Yusup, S.T.</h5>
                                    <div className='' style={{ fontSize: '.8rem' }}>
                                        <span className='cormorant-regular'>
                                            Putra Bungsu Bpk. Kamaludin dan Ibu Titi Nurhayati
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}