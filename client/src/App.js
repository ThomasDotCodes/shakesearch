import './style/style.scss'
import 'typeface-im-fell-english'
import {useState} from 'react'
import fetch from 'node-fetch'
import {SearchBox} from './components/SearchBox'
import _ from 'lodash'
import packageJson from '../package.json'
import {Animate} from 'react-simple-animate'

import Highlighter from 'react-highlight-words'
import {Results} from './components/Results'

function App() {

	console.log(`      ______ ______
    _/      Y      \\_
   // ~~ ~~ | ~~ ~  \\\\
  // ~ ~ ~~ | ~~~ ~~ \\\\  ShakeSearch
 //________.|.________\\\\  v${packageJson.version}
\`----------\`-'----------'`)

	const [isLoading, setIsLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [results, setResults] = useState(null)

	const onSearch = async () => {
		setIsLoading(true)
		const response = await fetch(`http://localhost:3001/search?q=${searchTerm}`)
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
					play={results}
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
				start={{position: 'absolute', right: '500px', opacity: '1.0'}}
				end={{position: 'absolute', right: '0px', opacity: '0.0'}}
			>
				<img className={`william`} src={'/image 28.png'} alt={'william'}/>
			</Animate>
		</>
	)
}

export default App
