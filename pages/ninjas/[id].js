export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

//creating single pages
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
	const data = await res.json();

	return {
		props: { ninja: data },
	};
};

const Datails = ({ ninja }) => {
	return (
		<div>
			<h1>Datails Page</h1>
			<p>name: {ninja.name}</p>
			<p>username: {ninja.username}</p>
			<p>email: {ninja.email}</p>
			<p>website: {ninja.website}</p>
			<p>address: {ninja.address.city}</p>
			<p>{ninja.address.zipcode}</p>
			<p>phone: {ninja.phone}</p>
			<p>company: {ninja.company.name}</p>
			<p>{ninja.company.catchPhrase}</p>
		</div>
	);
};

export default Datails;
