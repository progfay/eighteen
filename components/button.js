export default ({ name, onclick, finger, disabled }) => (
  <button onClick={onclick} disabled={disabled}> {name} </button>
)
