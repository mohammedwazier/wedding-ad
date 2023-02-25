/* eslint-disable react-hooks/exhaustive-deps */
import Page1 from '@/components/page_1';
import Page2 from '@/components/page_2';
import Page3 from '@/components/page_3';
import Page4 from '@/components/page_4';
import Page5 from '@/components/page_5';

import useSound from 'use-sound';
import moment from 'moment';
// import { useRouter } from 'next/router';

import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Head from 'next/head';
// import { useParallaxController } from 'react-scroll-parallax';

export default function Home() {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const [audioPlay, setAudioPlay] = useState(false);

  const AudioDiv = useRef<HTMLDivElement>(null);
  const LottieRef = useRef<any>(null);

  const [audio, setAudio] = useState<any>(null);

  useEffect(() => {
    if (!audio) {
      const newAudio = new Audio("audio/from-this-moment.mp3");
      setAudio(newAudio) // only call client
    }
  })

  const playAudio = () => {
    if (audioPlay === false) {
      audio.play();
      LottieRef.current.play();
      setAudioPlay(true);
    } else {
      audio.pause();
      LottieRef.current.pause();
      setAudioPlay(false);
    }
  }

  const changePageHide = (value: boolean) => {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    setTimeout(() => {
      document.getElementById('page_2')?.scrollIntoView({
        behavior: 'smooth'
      })
    }, 500)
  }
  return (
    <>
      <Head>
        <meta name="description" content="Sabtu, 4 Maret 2023" />
        <meta name="robots" content="follow, noindex" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="THE WEDDING OF: Arin &amp; Yusup" />
        <meta property="og:description" content="Sabtu, 4 Maret 2023" />
        <meta property="og:url" content={`${origin}/`} />
        <meta property="og:site_name" content="@masihkasar" />
        <meta property="article:section" content="Customer" />
        <meta property="og:updated_time" content={moment().format()} />
        <meta property="og:image" content={`${origin}/header.jpeg`} />
        <meta property="og:image:secure_url" content={`${origin}/header.jpeg`} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="Undangan Website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="article:published_time" content={moment().format()} />
        <meta property="article:modified_time" content={moment().format()} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THE WEDDING OF: Arin &amp; Yusup" />
        <meta name="twitter:description" content="Sabtu, 4 Maret 2023" />
        <meta name="twitter:image" content={`${origin}/header.jpeg`} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="arinayudiastika" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="1 menit" />
      </Head>
      <div className=''>
      </div>
      <div ref={AudioDiv} id="audioElement" className='handphone-width mx-auto position-relative'>
        <div onClick={playAudio} style={{ position: 'fixed', zIndex: 24, bottom: '1rem', left: '50%', cursor: 'pointer', transform: 'translateX(270%)', width: '3rem', height: '3rem', background: 'rgba(174, 143, 122, .8)', borderRadius: '50%' }}>
          <Player
            ref={LottieRef}
            autoplay={false}
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_fq0gutyi.json"
            style={{ width: '2rem', height: '2rem', transform: 'translateX(0%) translateY(20%)' }}
          />
        </div>
        <Page1 setOpened={changePageHide} playAudio={playAudio} />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    </>
  )
}
