import styled from 'styled-components';
import Button from '@mui/material/Button';


interface ButtonProps {
	hoverColor: string;
}

export const Container = styled<ButtonProps>(Button)`
	.css-sghohy-MuiButtonBase-root-MuiButton-root:hover{
		background-color: ${(props) => props.hoverColor} !important;
	}

	&:hover {
		
	}
`;
