import Image from 'next/image';

export default function Product({ products }) {
	return (
		<>
			<Image src="/test.jpg" alt="dress" width={3456} height={5184} />
			<p>{products.detail}</p>
			<address>
				<p>{products.email}</p>
			</address>
		</>
	);
}
