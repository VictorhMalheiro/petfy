import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

export const Container = styled(TextField)({
	'& label.Mui-focused': {
		color: '#000',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'blue',
	},
	'& .MuiOutlinedInput-root': {
		// '& fieldset': {
		// 	backgroundColor: '#F8F8F8',
		// },
		'&:hover fieldset': {
			borderColor: '#A8A8B3',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#696179',
		},
	},
})
