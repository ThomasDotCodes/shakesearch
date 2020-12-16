import {Animate} from 'react-simple-animate'
import {IoArrowForward as RightArrow} from 'react-icons/all'
import pluralize from 'pluralize'

export const SearchBox = props => {

	const {
		searchTerm,
		onClick,
		onChange,
		onFocus,
		results,
	} = props

	return (
		<div className={'search-box-wrapper'}>
			<div className='search-box'>
				<Animate
					play={results}
					duration={0.5}
					easeType={'ease-out'}
					start={{transform: 'translateX(0)'}}
					end={{transform: 'translateX(-100px)'}}
				>
					<div className={'search-inputs'}>
						<div className={'icon'}><img src={'/Vector.png'} alt={'search icon'}/></div>
						<input
							type='text'
							placeholder={`What art thee looking f'r?`}
							onChange={onChange}
							onFocus={onFocus}
							onKeyPress={(evt) => {
								if (evt.which === 13) onClick(evt)
								return false
							}}
							value={searchTerm}
						/>
						<Animate
							play={!results && searchTerm}
							duration={0.5}
							easeType={'ease-out'}
							start={{transform: 'translateX(-100px)', opacity: '0.0'}}
							end={{transform: 'translateX(0px)', opacity: '1.0'}}
						>
						<div className={'icon search'}><RightArrow onClick={onClick} size={'2em'}/></div>
						</Animate>
					</div>
				</Animate>
			</div>
			<div className={'lines'}>
				<Animate
					play={results}
					duration={0.5}
					easeType={'ease-out'}
					start={{transform: 'translateX(0)', opacity: '1.0'}}
					end={{transform: 'translateX(-200px)', opacity: '0'}}
				>
					<img src={'/Vector 2.png'} alt={'abstract lines'}/>
				</Animate>
			</div>
		</div>
	)
}
