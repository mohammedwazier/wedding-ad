/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BungaTop from '@/assets/images/Bunga - 1.png';

import IconAD from '@/assets/images/Icon-AD-New.png';
import Image from 'next/image';
import BungaDownNew from '@/assets/images/bottom-2-up.png';

import { useEffect, useRef, useState } from 'react';

export default function Page1({ setOpened, playAudio }: any) {
    const [btn, setBtn] = useState(false);
    const [fullPage, setFullPage] = useState(false);
    const [scroll, setScroll] = useState(true);
    const [bukuTamu, setBukuTamu] = useState("");
    const [height, setHeight] = useState(false);
    const elementHeight = useRef<HTMLDivElement>(null);
    const wrapperHeight = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const Tamu = urlParams.get("to");
        setBukuTamu(Tamu || "-");
    }, []);

    useEffect(() => {
        if (!height) {
            let wrapper = 0;
            let element = 0;
            if (elementHeight.current) {
                element = elementHeight.current.offsetHeight
            }
            if (wrapperHeight.current) {
                wrapper = wrapperHeight.current.offsetHeight;
            }

            if (element > wrapper) {
                setFullPage(false);
            }

            setHeight(true);
        }
    }, [height]);
    return (
        <>
            <div ref={wrapperHeight} id="page_1" className={`w-100 mx-auto position-relative h-auto ${fullPage ? '' : 'vh-100'} text-dark`} style={{ position: 'relative', zIndex: '25', overflowY: scroll ? 'auto' : 'hidden' }}>
                <div ref={elementHeight} className=' position-relative h-auto min-vh-100 background-paper' style={{ overflow: 'hidden' }}>
                    <Image priority src={BungaTop} width="160" height="160" alt={'Bunga'} style={{ position: 'absolute', right: '0', top: '0', zIndex: 0 }} />
                    {/* <Image src={BungaDown} width="160" height="160" alt={'Bunga'} style={{ position: 'absolute', left: '-1rem', bottom: '-1rem', zIndex: 1 }} /> */}
                    <Image priority src={BungaDownNew} width="415" height="87" alt={'Bunga'} style={{ position: 'absolute', zIndex: 0, transform: 'translate(-50%, 50%) rotate(180deg)', left: '50%', bottom: '27px' }} />
                    <div className='position-relative h-100'>

                        <div className='position-relative p-1 h-100'>
                            {/* Main */}
                            <div
                                className='row h-100 justify-content-center'>
                                <div className='col-12'>
                                    <div className='row justify-content-center h-100'>
                                        <div
                                            className='col-12 text-center cormorant-semibold text-grey align-items-start wow bounceInDown' style={{ paddingTop: '15%' }}>
                                            <h3>The Wedding Of</h3>
                                        </div>
                                        <div className='col-12 text-center mb-3'>
                                            <div
                                                className='wow bounceInDown'
                                            >
                                                {/* <Image src={IconAD} alt={'Arin & Yusup'} width={350} height={277} /> */}
                                                <img src={IconAD.src} style={{ width: '75%' }} />
                                            </div>
                                            <div className='als-script text-grey mt-5 position-relative mx-auto d-flex justify-content-around' style={{ fontSize: '4rem', width: '70%' }}>
                                                <div
                                                    className='wow slideInLeft'
                                                    style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                    04
                                                </div>
                                                <div
                                                    className='wow slideInLeft'
                                                    style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                    03
                                                </div>
                                                <div
                                                    className='wow slideInLeft'
                                                    style={{ background: '#AE8F7A', padding: '3px 15px', color: '#FFF', borderRadius: '20px' }}>
                                                    23
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 text-center text-grey align-items-end position-relative pb-5' style={{ zIndex: 23 }}>
                                            <br />
                                            <div
                                                className='wow bounceInUp'
                                                style={{ marginBottom: '1rem' }}
                                            >
                                                <span className='cormorant-semibold'>TO:</span>
                                                <br />
                                                <span className='cormorant-bold' style={{ fontSize: '1.3rem' }}>{bukuTamu}</span>
                                            </div>
                                            <div
                                                className='wow zoomIn'
                                            >
                                                <br />
                                                <div>
                                                    <span className='' style={{ fontSize: '1.8rem', fontFamily: 'Great Vibes' }}>Heartily invite you to our Wedding</span>
                                                </div>
                                            </div>
                                            {btn ? <></> : (
                                                <>
                                                    <br />
                                                    <button onClick={() => {
                                                        setOpened(true);
                                                        setBtn(true);
                                                        playAudio();
                                                        setFullPage(true);
                                                        setScroll(false);
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