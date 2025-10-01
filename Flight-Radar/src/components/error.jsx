const Error = ({message}) => {
  return (
	<div className="error">  
	  <p>No Flight Info</p>

	  <p>{message}</p>
	</div>
  )
}

export default Error;
