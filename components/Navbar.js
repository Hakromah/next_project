import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="flex justify-between flex-row h-24 bg-slate-700 items-center">
			<div className="logo">
				<Image src="/nextlogo.png" width={128} height={88} />
			</div>
			<ul className="flex flex-row w-[50%] items-center h-24 justify-center gap-20 text-red-700 font-bold bg-amber-400">
				<li className="text-red-700">
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/ninjas">Ninja Listing</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
