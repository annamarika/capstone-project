import styled from 'styled-components';

const Container = styled.li`
	background-color: white;
	max-width: 384px;
	max-height: 436px;
	padding: 20px 0 20px 20px;
	display: flex;
	border-radius: 50px;
`;

const ImageWrapper = styled.div`
	width: 250%;
	height: 386px;
	position: relative;
	object-fit: cover;
	border-radius: 50px;
	overflow: hidden;
	border: 3px solid #4b587f;
`;

const Article = styled.div`
	margin: 13px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductDetail = styled.p`
	color: #4b587f;
	text-transform: uppercase;
	padding-bottom: 10px;
	border-bottom: solid 3px #db6c4c;
`;

export { Container, ImageWrapper, Article, ProductDetail };
