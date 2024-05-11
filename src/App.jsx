import { useEffect } from 'react'
import {fetchDataFromAPI} from './utils/api'

function App() {
	useEffect(() => {
		apiTesting()
	})

	const apiTesting = () => {
		fetchDataFromAPI('/movie/popular')
			.then((res)=> {
				console.log(res)
			}

			)
		}
		return (
			<div className='App'> App
				
			</div>
		)
	}

  

export default App
