export const SearchBox = props => {

	const {
		onClick,
		onChange,
	} = props

	return (
		<>
			<input type='text' onChange={onChange}/>
			<button onClick={onClick}>Search</button>
		</>
	)
}
