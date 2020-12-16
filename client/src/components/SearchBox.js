export const SearchBox = props => {

	const {
		onClick,
		onChange,
	} = props

	return (
		<div className={'search-box'}>
			<input type='text' onChange={onChange} />
			<button onClick={onClick}>Search</button>
		</div>
	)
}
