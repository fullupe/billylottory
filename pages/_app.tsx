import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { ReactNode } from 'react';
import { NextPage } from "next";
import SideBar from '../components/SideBar'

// type Page<P = {}> = NextPage<P> & {
//   getLayout?: (page: ReactNode) => ReactNode;
// };

// type Props = AppProps & {
//   Component: Page;

// };

function MyApp({ Component, pageProps }: AppProps) {


  const getLayout = Component.getLayout || ((page: ReactNode) => page)
 
     if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
      //return getLayout(
      //<Component {...pageProps} />
      //)
     }


  return (
    <>
  <Header/>
  <Component {...pageProps} />
  </>

  )
}

export default MyApp
