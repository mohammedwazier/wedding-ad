/* eslint-disable react-hooks/exhaustive-deps */
import Page1 from '@/components/page_1';
import Page2 from '@/components/page_2';
import Page3 from '@/components/page_3';
import Page4 from '@/components/page_4';
import Page5 from '@/components/page_5';

import useSound from 'use-sound';

import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Home() {
  const [play, { pause }] = useSound('audio/from-this-moment.mp3',);
  const [audioPlay, setAudioPlay] = useState(false);

  const AudioDiv = useRef<HTMLDivElement>(null);
  const LottieRef = useRef<any>(null);

  const playAudio = () => {
    if (audioPlay === false) {
      play();
      LottieRef.current.play();
      setAudioPlay(true);
    } else {
      pause();
      LottieRef.current.pause();
      setAudioPlay(false);
    }
  }

  // let ctx: AudioContext;

  // useEffect(() => {
  //   document.getElementById("audioElement")?.addEventListener('click', () => {
  //     ctx?.resume().then(() => {
  //       playAudio();
  //     })
  //   })

  //   window.onload = () => {
  //     document.body.scrollTop = 0; // For Safari
  //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  //     ctx = new AudioContext();
  //     setTimeout(() => {
  //       AudioDiv.current?.click();
  //     }, 500)
  //   }
  // }, [])

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
      <div ref={AudioDiv} id="audioElement" className='handphone-width mx-auto position-relative'>
        <div onClick={playAudio} style={{ position: 'fixed', zIndex: 24, bottom: '1rem', left: '50%', cursor: 'pointer', transform: 'translateX(310%)', width: '3rem', height: '3rem', background: 'rgba(174, 143, 122, .8)', borderRadius: '50%' }}>
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
