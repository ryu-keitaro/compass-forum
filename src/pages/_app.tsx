import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Home from './index';
import storage from "../firebase"


const MyApp = ({ Component, pageProps }: AppProps) => {

	// const storage = getStorage();
	// const imageRef = ref(storage, "images/topicon.jpg");

	// const imageUrl = await getDownloadURL(imageRef);


	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
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
					 	url: "https://firebasestorage.googleapis.com/v0/b/test-nextjs-d6670.appspot.com/o/topicon-favicon.jpg?alt=media&token=e013e30a-0f81-4d53-934a-5de90bde3fe2",
						width: 800,
						height: 600,
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
			<Component {...pageProps} title={Home} storage={storage} />
		</>
	);
};

export default MyApp;