/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/top-right-3.svg';
import BungaDown from '@/assets/images/bottom-left-3.svg';

import Mask from '@/assets/images/New Prokes/face-mask.png';
import AntiSeptic from '@/assets/images/New Prokes/antiseptic.png';
import Social from '@/assets/images/New Prokes/distance.png';

import LBelakang from '@/assets/images/l-belakang.jpg';
import WBelakang from '@/assets/images/w-belakang.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Page5() {

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

    const downVariants = {
        onscreen: {
            y: [200, 0], opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        offscreen: { opacity: 0 }
    }

    const leftVariants = {
        onscreen: {
            x: [-200, 0], opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        offscreen: { opacity: 0 }
    }

    const rightVariants = {
        onscreen: {
            x: [200, 0], opacity: [0, 1],
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
            className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <div className=' position-relative h-100' >
                <div className='background-paper position-relative h-100'>

                    <div className='position-relative p-3 p-md-5 h-100' style={{ overflow: 'hidden' }}>
                        <Image src={BungaTop} width="160" height="160" alt={'Bunga'} style={{ position: 'absolute', right: '-5%', top: '-5%', zIndex: 1 }} />
                        <Image src={BungaDown} width="160" height="160" alt={'Bunga'} style={{ position: 'absolute', left: '-12%', bottom: '-5%', zIndex: 1 }} />
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className='col-12'>
                                <div className='row justify-content-center mt-4'>
                                    <div className='position-relative d-flex'>
                                        <motion.div
                                            variants={leftVariants}
                                        >
                                            <Image width="100" height="100" alt="Yusup" className='shadow-sm' src={LBelakang} style={{ width: '100px', border: '1px solid #AE8F7A', borderRadius: '50%' }} />
                                        </motion.div>
                                        <motion.div
                                            variants={rightVariants}
                                        >
                                            <Image width="100" height="100" alt="Arin" className='shadow-sm' src={WBelakang} style={{ width: '100px', border: '1px solid #AE8F7A', borderRadius: '50%' }} />
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        variants={upVariants}
                                        className='col-11 mt-4 text-center cormorant-regular position-relative' style={{ zIndex: '2' }} >
                                        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/Saudari berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                                        <br />
                                        <br />
                                        <br />
                                        <span style={{ fontFamily: 'Great Vibes', color: '#947a68', fontSize: '2rem' }}>Arin & Yusup</span>
                                    </motion.div>
                                    <motion.div
                                        variants={downVariants}
                                        className='col-12 mb-4 mt-2'>
                                        <div className='rounded-lg position-relative' style={{ background: 'rgba(174, 143, 122, .7)', color: '#FFF', zIndex: 2 }}>
                                            <div className='card-body cormorant-light text-center' style={{ fontSize: '.8rem' }}>
                                                Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
                                                <br />
                                                <br />
                                                (Q.S Ar Rum : 21)
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={downVariants}
                                        className='col-12 position-relative w-100 mb-4 pb-4 mt-3' style={{ zIndex: 4 }}>
                                        <div className='row text-center justify-content-center'>
                                            <div className='col'>
                                                <div style={{ background: '#d2ae96', width: '50px', height: '50px', borderRadius: '50%' }} className=" mx-auto position-relative d-flex justify-content-center align-items-center">
                                                    <Image width="30" height="30" alt={'Prokes'} src={AntiSeptic} style={{ width: '30px', height: '30px' }} />
                                                </div>
                                                <span className='cormorant-bold' style={{ fontSize: '.5rem', color: '#714f39' }}>
                                                    Gunakan Handsanitizer
                                                </span>
                                            </div>
                                            <div className='col'>
                                                <div style={{ background: '#d2ae96', width: '50px', height: '50px', borderRadius: '50%' }} className=" mx-auto position-relative d-flex justify-content-center align-items-center">
                                                    <Image width="30" height="30" alt={'Prokes'} src={Mask} style={{ width: '30px', height: '30px' }} />
                                                </div>
                                                <span className='cormorant-bold' style={{ fontSize: '.5rem', color: '#714f39' }}>
                                                    Gunakan Masker
                                                </span>
                                            </div>
                                            <div className='col'>
                                                <div style={{ background: '#d2ae96', width: '50px', height: '50px', borderRadius: '50%' }} className=" mx-auto position-relative d-flex justify-content-center align-items-center">
                                                    <Image width="30" height="30" alt={'Prokes'} src={Social} style={{ width: '30px', height: '30px' }} />
                                                </div>
                                                <span className='cormorant-bold' style={{ fontSize: '.5rem', color: '#714f39' }}>
                                                    Jaga Jarak
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </motion.div>
    )
}