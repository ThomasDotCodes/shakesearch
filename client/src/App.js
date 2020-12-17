// libraries
import {useState, useEffect} from 'react'
import fetch from 'node-fetch'
import {Animate} from 'react-simple-animate'
import _ from 'lodash'

// internal
import packageJson from '../package.json'
import {Results} from './components/Results'
import {SearchBox} from './components/SearchBox'

// styling/assets
import './style/style.scss'
import 'typeface-im-fell-english'

function App() {

	const [isLoading, setIsLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [results, setResults] = useState(null)

	useEffect(() => {
		console.log(`      ______ ______
    _/      Y      \\_
   // ~~ ~~ | ~~ ~  \\\\
  // ~ ~ ~~ | ~~~ ~~ \\\\  ShakeSearch
 //________.|.________\\\\  v${packageJson.version}
\`----------\`-'----------'`)
	}, [])

	useEffect(() => {
		if (!results) return

		// sort results in case we want to display them based on alphabetical order of book titles
		const groupedResults = _.groupBy(results, 'book')

		console.log(`found ${results.length} total results in ${_.toArray(groupedResults).length} books`)
	}, [results])

	const onSearch = async () => {
		setIsLoading(true)
		const response = await fetch(`/search?q=${searchTerm}`)
		const json = await response.json()
		// sort results in case we want to display them based on alphabetical order of book titles
		//const sortedResults = _.sortBy(json, 'book')
		setResults(json)
		setIsLoading(false)
	}

	const onSearchInput = (evt) => {
		setSearchTerm(evt.target.value)
		setResults(null)
	}

	const clearSearchInput = (evt) => {
		setSearchTerm('')
		setResults(null)
	}

	return (
		<>
			<div className={'wrapper'}>
				<div className='logo'>Shakesearch</div>

				<SearchBox
					results={results}
					onClick={onSearch}
					onChange={onSearchInput}
					onFocus={clearSearchInput}
					searchTerm={searchTerm}/>

			</div>
			<Results results={results} searchTerm={searchTerm}/>
			<Animate
				play={results}
				duration={0.5}
				easeType={'ease-out'}
				start={{position: 'absolute', right: '0', bottom: '-10px', opacity: '1.0'}}
				end={{position: 'absolute', right: '-500px', bottom: '-10px', opacity: '0.0'}}
			>
				<img src={'/william.png'} alt={'william'}/>
			</Animate>
		</>
	)
}

export default App
