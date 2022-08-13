import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
	const URL =
		'https://newsapi.org/v2/top-headlines?country=us&apiKey=208c9aaa8a65454e832ba5daa16f491f';

	const [articles, setArticles] = useState([]);

	const getData = async () => {
		const data = await axios.get(URL);
		setArticles(data.data.articles);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={styles.container}>
			<header className='bg-blue text-white h-[20vh] px-[10%] flex flex-col justify-between py-8 '>
				<div className='flex justify-between '>
					<h1>Gabriel Pimenta</h1>
					<h2>blog</h2>
				</div>

				<div className='relative '>
					<input
						className='w-full p-2'
						type='text'
						placeholder='Pesquisar no blog'
					/>
					<button
						onClick={() => console.log(articles)}
						className='absolute right-2 top-1 text-dark'>
						<AiOutlineSearch color='black' size={32} />
					</button>
				</div>
			</header>

			<div className='sm:w-[90%] mx-auto mt-24 flex flex-col gap-8 '>
				{articles.map(
					({ content, title, description, publishedAt, urlToImage }) => {
						return (
							<article className='bg-white p-4 flex sm:flex-row flex-col gap-6'>
								<img src={urlToImage} className='sm:w-[300px] w-full ' />

								<div>
									<div className='flex justify-between p-4'>
										<span className='text-gray text-xs'>{publishedAt}</span>
										<span>
											<AiOutlineHeart />
										</span>
									</div>
									<h3 className='font-bold text-lg'>{title}</h3>
									<p className='font-light text-sm'>{description}</p>
									<button className='text-blue w-[150px] my-4 text-start'>
										VER MAIS
									</button>
								</div>
							</article>
						);
					}
				)}
			</div>
		</div>
	);
}
