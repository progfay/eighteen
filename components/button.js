export default ({ name, onclick, finger, disabled }) => (
  <button onClick={onclick} disabled={disabled} >
    { console.log(disabled ? 'disabled' : '') }
    { name }
  </button>
)
