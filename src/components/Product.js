import Image from 'next/image';

export default function Product({ product }) {
	return (
		<>
			<Image src={product.image} alt="dress" width={3456} height={5184} />
			<p>{product.detail}</p>
			<address>
				<p>{product.email}</p>
			</address>
		</>
	);
}
