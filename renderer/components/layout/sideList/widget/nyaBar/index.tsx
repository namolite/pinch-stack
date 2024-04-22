
import ProgressBar from "./bar"

// BUG: Hard Coded.
const NyaBar = () => {
  return (
    <div className="pt-6">
      <ProgressBar
        type={'day'}
        per="72.3%"
      />
      <ProgressBar
        type={'week'}
        per="10.3%"
      />
      <ProgressBar
        type={'month'}
        per="73.3%"
      />
    </div>
  )
}

export default NyaBar