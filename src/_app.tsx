import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

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
				description="ここはコンパスのメンバー募集や質問募集ができる掲示板です。"
				openGraph={{
					type: "website",
					title: "",
					description: "デフォルトの説明",
					site_name: "サイトの名前",
					url: "サイトのURL",
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
      ...
		</>
	);
};