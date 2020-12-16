import pluralize from 'pluralize'
import _ from 'lodash'

/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react'

export const ResultsSummary = props => {

	const {
		results,
	} = props

	return (
		<div>
			<h6>found {pluralize('result', results.length, true)}</h6>
			{
				_.map(_.groupBy(results, 'book'), (positions, book) => {
					return <li>
						<a href={`#${book}`} css={css`color:white;`}>{book} ({positions.length})</a>
					</li>
				})
			}
		</div>
	)
}
