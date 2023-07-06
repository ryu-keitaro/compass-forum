import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React,{useEffect, useState} from 'react';
import Home from './index';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import storage from "../firebase";

const firebaseConfig = {
	// Firebaseの設定情報をここに入力
	apiKey: "AIzaSyBE6W2TXtedCPj5ZoKQu2WIyVEBOMD0BIg",
	authDomain: "test-nextjs-d6670.firebaseapp.com",
	projectId: "test-nextjs-d6670",
	storageBucket: "test-nextjs-d6670.appspot.com",
	messagingSenderId: "531537153080",
	appId: "1:531537153080:web:5b1656e3c43845d1baeacd",
	measurementId: "G-KYVPHJTMQX"
  };


const MyApp = ({ Component, pageProps }: AppProps) => {
	 const [ogImageUrl, setOgImageUrl] = useState<string | undefined>(undefined);

	 useEffect(() => {
	 	const fetchDownloadURL = async () => {
		  const storage = getStorage();
	 	  const storageRef = ref(storage, "gs://test-nextjs-d6670.appspot.com/opengraph.jpg");
	 	  const downloadURL = await getDownloadURL(storageRef);
	 	  setOgImageUrl(downloadURL); 
	 	  // ダウンロードURLを使用する処理
	 	};
	  
	 	fetchDownloadURL();
	   }, []);


	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="icon" href="/favicon.ico" />

			</Head>
			<DefaultSeo
				defaultTitle="コンパス掲示板"
				canonical="https://www.commpass-forum.net"
				description="ここはコンパスのメンバー募集や質問募集ができる掲示板です。"
				openGraph={{
					type: "website",
					title: "コンパス募集掲示板",
					description: "コンパスのメンバー募集や質問募集ができる掲示板です。",
					site_name: "COMPASS.NET",
					url: "https://www.compass-forum.net",
					images: [
					 {
					 	url: ogImageUrl || "",
						width: 1200,//元の値800
						height: 630,//元の値600
						alt: 'Og Image Alt',
						type: 'image/jpeg',
					 },
					],
				}}


				// twitter={{
				// 		handle: '@handle',
				// 		site: '@site',
				// 		cardType: "summary_large_image",
				// }}
			/>
			<Component {...pageProps} title={Home} />
		</>
	);
};

export default MyApp;