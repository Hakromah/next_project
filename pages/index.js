import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninjas | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>HomePage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
					ad ducimus optio a veritatis vero, cumque est possimus.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Doloremque pariatur, qui deleniti aspernatur ipsa nihil error
					ipsum. Tenetur ex ipsam itaque eveniet ut, accusantium
					temporibus?
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Doloremque pariatur, qui deleniti aspernatur ipsa nihil error
					ipsum. Tenetur ex ipsam itaque eveniet ut, accusantium
					temporibus?
				</p>
				<Link className={styles.btn} href="/ninjas">
					{' '}
					See Ninja Page
				</Link>
			</div>
		</>
	);
}
