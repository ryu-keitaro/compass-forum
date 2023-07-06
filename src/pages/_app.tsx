import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Home from './index';



const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<DefaultSeo
				defaultTitle="コンパス募集掲示板"
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
					 	url: "https://drive.google.com/file/d/1a16eobdsB7hTcEyhfAVZnt8y2KMRs8qM/view?usp=drive_link",
						width: 512,
						height: 512,
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
			<Component {...pageProps} nanika={Home} />
		</>
	);
};

export default MyApp;