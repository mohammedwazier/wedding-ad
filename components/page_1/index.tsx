/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/Bunga - 1.png';
import BungaDown from '@/assets/images/Bunga - 2.png';
import { motion } from 'framer-motion';

import IconAD from '@/assets/images/Icon-AD-New.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';



export default function Page1({ setOpened, playAudio }: any) {
    const [btn, setBtn] = useState(false);
    const [bukuTamu, setBukuTamu] = useState("");

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const Tamu = urlParams.get("to");
        setBukuTamu(Tamu || "-");
    }, [])
    return (
        <>
            <Head>
                <title>Wedding Arin Ayudiastika and Diana Yusup</title>
            </Head>
            <div id="page_1" className={`w-100 mx-auto position-relative h-auto vh-100 text-dark`} style={{ position: 'relative', zIndex: '25', overflowY: !btn ? 'auto' : 'hidden' }}>
                <div className=' position-relative h-auto min-vh-100 background-paper' style={{ overflow: 'hidden' }}>
                    <Image src={BungaTop} width="160" height="160" alt={'Bunga'} style={{ position: 'absolute', right: '-1rem', top: '-1rem', zIndex: 1 }} />
                    <Image src={BungaDown} width="160" height="160" alt={'Bunga'} style={{ position: 'absolute', left: '-1rem', bottom: '-1rem', zIndex: 1 }} />
                    <div className='position-relative h-100'>

                        <div className='position-relative p-1 h-100'>
                            {/* Main */}
                            <div
                                className='row h-100 justify-content-center'>
                                <div className='col-12'>
                                    <div className='row justify-content-center h-100'>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ ease: "ease", duration: 2 }}
                                            className='col-12 text-center cormorant-semibold text-grey align-items-start' style={{ paddingTop: '15%' }}>
                                            <h3>The Wedding Of</h3>
                                        </motion.div>
                                        <div className='col-12 text-center mb-3'>
                                            <motion.div
                                                animate={{
                                                    scale: [0, 1.2, 1, 1],
                                                }}
                                                transition={{ duration: 1 }}
                                            >
                                                <Image src={IconAD} alt={'Arin & Yusup'} width={350} height={277} />
                                            </motion.div>
                                            <div className='als-script text-grey mt-5 position-relative mx-auto d-flex justify-content-around' style={{ fontSize: '4rem', width: '70%' }}>
                                                <motion.div
                                                    animate={{ x: [-100, 0], opacity: [0, 1] }}
                                                    transition={{ ease: "easeOut", duration: 1 }}
                                                    style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                    04
                                                </motion.div>
                                                <motion.div
                                                    animate={{ x: [-100, 0], opacity: [0, 1] }}
                                                    transition={{ ease: "easeOut", duration: 1 }}
                                                    style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                    03
                                                </motion.div>
                                                <motion.div
                                                    animate={{ x: [-100, 0], opacity: [0, 1] }}
                                                    transition={{ ease: "easeOut", duration: 1 }}
                                                    style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                    23
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className='col-12 text-center text-grey align-items-end position-relative' style={{ zIndex: 23 }}>
                                            <br />
                                            <motion.div
                                                animate={{ y: [100, 0], opacity: [0, 1] }}
                                                transition={{ ease: "easeOut", duration: 1 }}
                                            >
                                                <span className='cormorant-semibold'>TO:</span>
                                                <br />
                                                <span className='cormorant-bold' style={{ fontSize: '1.3rem' }}>{bukuTamu}</span>
                                            </motion.div>
                                            <>
                                                <br />
                                                <br />
                                            </>
                                            <br />
                                            <motion.div
                                                animate={{ scale: [1.5, 1], opacity: [0, 1] }}
                                                transition={{ ease: "easeOut", duration: 1.5 }}
                                            >
                                                <br />
                                                <span className='' style={{ fontSize: '1.8rem', fontFamily: 'Great Vibes' }}>I heartily invite you to our Wedding</span>
                                            </motion.div>
                                            {btn ? <></> : (
                                                <>
                                                    <br />
                                                    <button onClick={() => {
                                                        setOpened(true);
                                                        setBtn(true);
                                                        playAudio();
                                                    }} className='btn btn-sm btn-coklat shadow-sm px-4' style={{ borderRadius: '20px', fontFamily: 'Great Vibes' }}>Buka Undangan</button>
                                                    <br />
                                                    <br />
                                                </>
                                            )}
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}