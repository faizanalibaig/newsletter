import LeftSide from "./components/LeftSide";

import { Poppins } from 'next/font/google'
import ThanksPart from "./components/ThanksPart";

export const poppins= Poppins({
    weight:['400', '700'],
    subsets:['latin']
})

export default function Home() {
  return (
   <main className={`bg-sky-950 h-screen w-screen flex justify-center items-center ${poppins.className}`}>
   <LeftSide />
   </main>
  );
}
