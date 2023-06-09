import './index.css'

const WinOrLoose = props => {
  const {score, againGame} = props

  const playGame = () => {
    againGame()
  }

  return (
    <div className="loose-card">
      <img
        className="trophy"
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p className="score-head">YOUR SCORE</p>
      <p className="count">{score}</p>
      <button className="play-again" type="button" onClick={playGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p className="button-name">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default WinOrLoose
