import Page1 from '@/components/page_1';
import Page2 from '@/components/page_2';
import Page3 from '@/components/page_3';
import Page4 from '@/components/page_4';
import Page5 from '@/components/page_5';
import { useEffect, useState } from 'react';

export default function Home() {
  const [audio, setAudion] = useState();
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </>
  )
}
