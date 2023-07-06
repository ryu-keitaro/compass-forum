import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Home from './index';


const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>コンパス掲示板</title>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<DefaultSeo
				defaultTitle="コンパス募集掲示板"
				description="ここはコンパスのメンバー募集や質問募集ができる掲示板です。"
				openGraph={{
					type: "website",
					title: "コンパス掲示板",
					description: "ここはコンパスのメンバー募集や質問募集ができる掲示板です。",
					site_name: "コンパス募集掲示板",
					url: "https://www.compass-forum.net",
					images: [
					 {
					 	url: "https://www.example.ie/og-image-01.jpg",
						width: 800,
						height: 600,
						alt: 'Og Image Alt',
						type: 'image/jpeg',
					 },
					],
				}}
				twitter={{
						handle: '@handle',
						site: '@site',
						cardType: "summary_large_image",
				}}
			/>
			<Component {...pageProps} nanika={Home} />
		</>
	);
};

export default MyApp;