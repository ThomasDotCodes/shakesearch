import './style/style.scss'
import 'typeface-im-fell-english'
import {useState} from 'react'
import fetch from 'node-fetch'
import {SearchBox} from './components/SearchBox'
import _ from 'lodash'
import packageJson from '../package.json';

import {ResultsSummary} from './components/ResultsSummary'
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
	const [results, setResults] = useState([])

	const onSearch = async () => {
		setIsLoading(true)
		const response = await fetch(`http://localhost:3001/search?q=${searchTerm}`)
		const json = await response.json()
		const sortedResults = _.sortBy(json, 'book')
		setResults(sortedResults)
		setIsLoading(false)
	}

	const onSearchInput = (evt) => {
		setSearchTerm(evt.target.value)
	}

	return (
		<>
			<a name={"top"}/>
			<div className={'wrapper'}>
				{/* sidebar */}
				<div className={'sidebar'}>
					<h1 className={'logo shake-little shake-slow shake-constant'}>ShakeSearch</h1>
					<SearchBox onClick={onSearch} onChange={onSearchInput}/>
					<ResultsSummary results={results} isLoading={isLoading} />
				</div>

				{/* results */}
				<Results results={results} searchTerm={searchTerm}/>
			</div>
			<svg>
				<filter id="displace">
					<feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"/>
					<feDisplacementMap in="SourceGraphic" scale="5"/>
				</filter>
			</svg>
		</>
	)
}

export default App
