/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { Key, useEffect, useState } from 'react';

import Verified from '@/assets/images/verified.png';
import UnVerified from '@/assets/images/un-verified.png';

import { upVariants, downVariants } from '../HoverStyle';

import moment from 'moment';
import Image from 'next/image';

import Swal from 'sweetalert2';

moment.locale('id');

export default function Page4() {
    const [loadComment, setLoadComment] = useState<any>({
        data: [],
        prev_page_url: null,
        next_page_url: null,
    });

    const [bukuTamu, setBukuTamu] = useState("");

    const [message, setMessage] = useState({
        name: "",
        pesan: "",
        status_kehadiran: "",
        name_params: "",
        wedding_code: process.env.NEXT_PUBLIC_WEDDING_KEY,
    })
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false);

    const NextPage = async () => {
        setPage(page + 1);
        const data = await getData();
        setLoadComment(data);
    }

    const PrevPage = async () => {
        setPage(page - 1);
        const data = await getData();
        setLoadComment(data);
    }

    const getData = async (pg = 1) => {
        let PG = pg !== 1 ? page : pg;
        const WeddingKey = process.env.NEXT_PUBLIC_WEDDING_KEY || "";
        const WeddingURL = process.env.NEXT_PUBLIC_BACKEND_URL || "";
        let getListData = await fetch(`${WeddingURL}api/v1/get_list_buku/${WeddingKey}?page=${PG}`);
        const response = await getListData.json();
        return response;
    }

    const SendPesan = async () => {
        if (message.name && message.pesan && message.status_kehadiran && message.name_params) {
            const WeddingURL = process.env.NEXT_PUBLIC_BACKEND_URL || "";
            Swal.fire({
                text: 'Sedang mengirimkan Ucapan',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen(popup) {
                    Swal.showLoading()
                },
            });
            fetch(`${WeddingURL}api/v1/insert_buku_tamu`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message),
            })
                .then(res => res.json())
                .then(async (res) => {
                    Swal.fire({
                        icon: 'success',
                        text: "Terima kasih, Pesan berhasil Dikirim",
                        timer: 2000,
                    });
                    const data = await getData(page);
                    setLoadComment(data);
                })
                .catch(() => {
                    Swal.fire({
                        icon: 'warning',
                        text: 'Gagal mengirimkan Ucapan, silahkan coba beberapa saat lagi',
                        timer: 3000,
                    })
                })
        } else {
            Swal.fire({
                icon: 'warning',
                text: 'Harap mengisi Ucapan terlebih dahulu',
                timer: 3000,
            })
        }

    }

    const onChange = (e: any) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (!message.name_params) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const Tamu = urlParams.get("to");
            setBukuTamu(Tamu || "-");
            setMessage({
                ...message,
                name_params: Tamu || "-"
            })
        }
    }, [message])

    useEffect(() => {
        if (!load) {
            (async () => {
                const WeddingKey = process.env.NEXT_PUBLIC_WEDDING_KEY;
                const WeddingURL = process.env.NEXT_PUBLIC_BACKEND_URL;
                let getListData = await fetch(`${WeddingURL}api/v1/get_list_buku/${WeddingKey}?page=${page}`);

                const response = await getListData.json();

                setLoadComment(response);
                // console.log(response);
                setLoad(!load);
            })();
        }
    }, [load, page]);

    return (
        <div className={`handphone-width mx-auto position-relative h-100 text-dark`}>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className='position-relative h-100'>
                <div className='background-paper position-relative h-100' style={{ overflow: 'hidden' }}>

                    <Player
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_kotaolcw.json"
                        style={{ width: '100%', height: '200px', position: 'absolute', zIndex: 1, bottom: '-10%' }}
                    />

                    <div className='position-relative p-3 p-md-5 h-100' style={{ zIndex: 2 }}>
                        {/* Main */}
                        <div className='row h-100 justify-content-center align-items-center'>
                            <motion.div
                                variants={upVariants}
                                className='col-12'>
                                <div className='row justify-content-center'>
                                    <div className='col-12 text-center'>
                                        <span className='' style={{ fontSize: '2rem', fontFamily: 'Great Vibes', fontWeight: 'bold' }}>RSVP</span>
                                        <center>
                                            <Player
                                                autoplay
                                                loop
                                                src="https://assets2.lottiefiles.com/packages/lf20_3hjvh1ex.json"
                                                style={{ width: '4rem', height: '4rem' }}
                                            />
                                        </center>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='row mt-4 justify-content-center'>
                            <motion.div
                                variants={downVariants}
                                className='col-12'>
                                <div className='p-3' style={{ borderRadius: '10px', border: '1px solid rgba(174, 143, 122, 1)', background: 'rgba(174, 143, 122, .5)' }}>
                                    <small style={{ fontSize: '.7rem' }} className="text-muted">*NB: Diharapkan tidak mencantumkan Emoticon saat mengisi Ucapan.</small>

                                    <div className='form-group mt-4'>
                                        <input name="name" onChange={onChange} value={message.name} type={'text'} className="form-control shadow-sm" placeholder='Nama' style={{ border: 'none', borderRadius: '10px' }} />
                                    </div>

                                    <div className='form-group mt-4'>
                                        <textarea name="pesan" onChange={onChange} value={message.pesan} className='form-control shadow-sm' placeholder='Ucapan' style={{ border: 'none', borderRadius: '10px', height: '100px' }} />
                                    </div>

                                    <div className='form-group'>
                                        <select defaultValue={message.status_kehadiran} name="status_kehadiran" onChange={onChange} className='form-control' style={{ border: 'none', borderRadius: '10px', }}>
                                            <option>Konfirmasi Kehadiran</option>
                                            <option value={'hadir'}>Hadir</option>
                                            <option value={'tidak_hadir'}>Tidak Hadir</option>
                                        </select>
                                    </div>

                                    <div className='form-group'>
                                        <button onClick={SendPesan} className='btn btn-block cormorant-regular btn-sm btn-coklat' style={{ borderRadius: '15px' }}>Kirim</button>
                                    </div>

                                    <div className='' style={{ maxHeight: '300px', height: 'auto', overflowX: 'hidden', overflowY: 'auto', }}>
                                        {loadComment?.data.map((_v: any, key: Key | null | undefined) => (
                                            <div key={key} className="my-3 card" style={{ borderRadius: '10px' }}>
                                                <div className='py-2 px-3'>
                                                    <div className='cormorant-bold mb-1'>
                                                        {_v.name} &nbsp;
                                                        {_v.status_kehadiran === 'hadir' ? (
                                                            <Image src={Verified} width="15" height="15" alt={'Verified'} style={{ position: 'relative', transform: 'translateY(-15%) translateX(-25%)' }} />
                                                        ) : (
                                                            <Image src={UnVerified} width="15" height="15" alt={'UnVerified'} style={{ position: 'relative', transform: 'translateY(-15%) translateX(-25%)' }} />
                                                        )}
                                                    </div>
                                                    <div className='cormorant-regular'>
                                                        {_v.pesan}
                                                    </div>
                                                    <div className='cormorant-light'>
                                                        <small>
                                                            <i className="fa fa-clock-o" style={{ fontSize: '10px' }} />
                                                            &nbsp;
                                                            {moment(_v.created_at).startOf('hour').fromNow()}
                                                            &nbsp;
                                                            {_v.status_kehadiran === 'hadir' ? <small className='text-primary'>Hadir</small> : <small className='text-danger'>Tidak Hadir</small>}
                                                        </small>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                        <div className='row justify-content-center align-items-center text-center'>
                                            <div className='col-3'>
                                                <button className='btn btn-outline-light btn-sm' onClick={PrevPage} disabled={loadComment.prev_page_url ? false : true}> {`<`} </button>
                                            </div>
                                            <div className='col-3 text-white cormorant-bold'>Page <b>{page}</b></div>
                                            <div className='col-3'>
                                                <button className='btn btn-outline-light btn-sm' onClick={NextPage} disabled={loadComment.next_page_url ? false : true}> {`>`} </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </motion.div >
        </div >
    )
}