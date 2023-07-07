import Head from 'next/head'/* header で動いてる　よく分からん*/
import MainLayout from '../layouts'
import styles from '../styles/Home.module.scss'
import Nav from "../components/nav";
import BBSquestion from '../components/BBSquestion';
import React from 'react';


export default function Home() {
 
  return (
    <MainLayout>
      <Head>
        
        
      </Head>
       <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main} >
        
        <BBSquestion /> 
        {/*↑ 疑ボタンを押したら投稿が表示される */}

        </div>
      </div>
      
  
    </MainLayout>
  )
}