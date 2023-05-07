import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<h1>HomePage</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad
				ducimus optio a veritatis vero, cumque est possimus.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad
				ducimus optio a veritatis vero, cumque est possimus.
			</p>
		</div>
	);
}
