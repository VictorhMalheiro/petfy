import type { NextPage } from 'next'
import Button from '../components/Button'
import { Input } from '../components/Input'

const Home: NextPage = () => {
	return (
		<>
			<h1>Home</h1>
			<Button variant="outlined">Tadeu boiola</Button>
			<Button variant="contained">Vitinho lindo</Button>
			<Input />
		</>
	)
}

export default Home
