import type { NextPage } from 'next'

import Head from 'next/head'
import { ReactNode } from 'react';
import Login from '../components/Login'


const Home: NextPage = () => {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Billy Lottory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />

    </div>
  )
}

export default Home

Home.getLayout= function PageLayout(page: any){
  return (
    <>
    {page}
    </>
  )
}
