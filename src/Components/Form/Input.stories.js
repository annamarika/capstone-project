import InputContainer from '../UI/Form/StyledInputContainer';
import InputSingleContainer from '../UI/Form/StyledInputSingleContainer';
import Label from '../UI/Form/StyledLable';
import Input from '../UI/Form/StyledInput';

export default {
	title: 'Components/Form/Input',
	component: Input,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

const props = {
	children: 'title',
};

export function SingleInput() {
	return (
		<InputContainer>
			<InputSingleContainer>
				<Label {...props} />
				<Input />
			</InputSingleContainer>
		</InputContainer>
	);
}
