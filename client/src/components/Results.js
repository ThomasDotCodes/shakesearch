import _ from 'lodash'
import Highlighter from 'react-highlight-words'
import {paramCase} from 'change-case'
import {Animate} from 'react-simple-animate'

export const Results = props => {

	const {
		results,
		searchTerm,
	} = props

	if (!results || results.length === 0) return null

	const groupedResults = _.groupBy(results, 'book')

	return (
		<Animate
			play={results}
			duration={0.5}
			easeType={'ease-out'}
			start={{transform: 'translateY(100%)', opacity: '0.0'}}
			end={{transform: 'translateY(-465px)', opacity: '1.0'}}
		>
			<div className={'result-box'}>
				{
					_.map(groupedResults, (positions, book) => {
						return (
							<div className={'book-results'} key={book}>
								<a name={paramCase(book)}/>
								<h2>{book} ({positions.length})</h2>
								<div>{positions.map(({start, end, text, book}) => {
									return (
										<div className={'result'} key={start}>
												<h3>{book}</h3>
												<Highlighter
													className={'result-with-context'}
													searchWords={[searchTerm]}
													textToHighlight={`...${text}...`}
													highlightTag={'span'}
													highlightClassName={'search-highlight'}
													unhighlightClassName={'search-context'}
												/>
										</div>
									)
								})}</div>
							</div>
						)
					})
				}
			</div>
		</Animate>
	)
}
