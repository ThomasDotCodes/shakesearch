import {Animate} from 'react-simple-animate'

export const SearchBox = props => {

	const {
		searchTerm,
		play,
		onClick,
		onChange,
		onFocus,
	} = props

	return (
		<>
			<Animate
				play={play}
				duration={0.5}
				easeType={'ease-out'}
				start={{transform: 'translateX(0)'}}
				end={{transform: 'translateX(-100px)'}}
			>
				<div className='search-box'>
					<div className={'search-inputs'}>
						<img className={'icon'} src={'/Vector.png'} alt={'search icon'}/>
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
						<button onClick={onClick}>-></button>
					</div>
				</div>
			</Animate>
			<Animate
				play={play}
				duration={0.5}
				easeType={'ease-out'}
				start={{transform: 'translateX(0)', opacity: '1.0'}}
				end={{transform: 'translateX(-200px)', opacity: '0'}}
			>
				<div className={'lines'}>
					<img src={'/Vector 2.png'} alt={'abstract lines'}/>
				</div>
			</Animate>
		</>
	)
}
