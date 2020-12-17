// libraries
import pluralize from 'pluralize'
import _ from 'lodash'
import {paramCase} from 'change-case'

// TODO: implement after talking with designer
export const ResultsSummary = props => {

	// TODO: configure externally
	const MAX_RESULTS = 9999

	const {
		results,
		isLoading,
	} = props

	if (isLoading) {
		return <div>
			<div className={'search-results-title'}>searching...</div>
		</div>
	}

	if (!results || results.length === 0) return null

	const resultsMessage = (results.length >= MAX_RESULTS)
		? `found ${MAX_RESULTS}+ results`
		: `found ${pluralize('result', results.length, true)}`

	return (
		<div>
			<div className={'search-results-title'}>{resultsMessage}:</div>
			{
				_.map(_.groupBy(results, 'book'), (positions, book) => {
					return <div className={'search-result-badge'} key={book}>
						<a href={`#${paramCase(book)}`}>{book} ({positions.length})</a>
					</div>
				})
			}
		</div>
	)
}
