import React from 'react';
import { AppProps } from 'next/app';
// import Head from 'next/head'header で動いてる　よく分からん*/
import MainLayout from '../layouts'
import styles from '../styles/Home.module.scss'
import Nav from "../components/nav";
import AppData from '@/components/BBS/databox';






// export default function Home() {
  
const Home:React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      {/* <Head>
        
        
      </Head> */}
       <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main} >

        
        {/* <AllPosts/> */}
        <Component {...pageProps} />
        <AppData />
        
        
        {/* <BBS /> */}
   
       
        </div>
      </div>
      
  
    </MainLayout>
  );
};

export default Home;

