import _ from 'lodash'
import Highlighter from 'react-highlight-words'
import {paramCase} from 'change-case'

export const Results = props => {

	const {
		results,
		searchTerm,
	} = props

	if (!results || results.length === 0) return null

	const groupedResults = _.groupBy(results, 'book')

	return (
		<div className={'results'}>
			{
				_.map(groupedResults, (positions, book) => {
					return (
						<div className={'book-results'} key={book}>
							<a name={paramCase(book)}/>
							<h2>{book} ({positions.length})</h2>
							<div>{positions.map(({start, end, text, book}) => {
								return (
									<div className={'result'} key={start}>
										<div className={'parchment'}/>
										<div className={'content'}>
											<h3>{book}</h3>
											<Highlighter
												className={'result-with-context'}
												searchWords={[searchTerm]}
												textToHighlight={text}
												highlightTag={'span'}
												highlightClassName={'search-highlight'}
												unhighlightClassName={'search-context'}
											/>
											<a className={'back-to-top'} href={'#top'}>Back to top</a>
										</div>
									</div>
								)
							})}</div>
						</div>
					)
				})
			}
		</div>
	)
}
