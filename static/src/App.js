import './style/style.scss'
import 'typeface-im-fell-english'
import React, {useState, useEffect} from 'react'
import fetch from 'node-fetch'
import {SearchBox} from './components/SearchBox'
import _ from 'lodash'
import pluralize from 'pluralize'

/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react'
import {ResultsSummary} from './components/ResultsSummary'
import {Results} from './components/Results'

function App() {

	const [source, setSource] = useState('')
	const [searchTerm, setSearchTerm] = useState('')
	const [results, setResults] = useState([])

	useEffect(() => {
		(async () => {
			const response = await fetch(`http://localhost:3001/source`)
			setSource(await response.text())
		})()
	}, [])

	const onSearch = async () => {
		const response = await fetch(`http://localhost:3001/search?q=${searchTerm}`)
		setResults(await response.json())
	}

	return (
		<div css={css`display: flex;`}>
			{/* sidebar */}
			<div css={css`background-color: #282c34;
              color: white;
              padding: 20px 40px;`}>
				<h1>ShakeSearch</h1>
				<SearchBox onClick={onSearch} onChange={(evt) => setSearchTerm(evt.target.value)}/>
				{results && <div css={css`
                  position: relative;
                  width: 100%;
                  height: auto;
                  display: flex;
				`}>

					<ResultsSummary results={results}/></div>}
			</div>

			{/* results */}
			<div css={css`margin-top:40px;`}>
				{results && <Results results={results}/>}
				<svg>
					<filter id="displace">
						<feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"/>
						<feDisplacementMap in="SourceGraphic" scale="5"/>
					</filter>
				</svg>
			</div>
		</div>
	)
}

export default App
