import { NavLink } from "react-router-dom";
import image1 from '/1.png'
import image2 from '/2.png'
import './customize.css'
const Play =()=>{









  
    return(
        <div>
    <div className="game-board">
     
      <div className="title-h1">
        <h1>
          <strong>Hacker's attack Cards</strong> <br />
          Choose the best card to stop the hackers' attack
        </h1>
      </div>

      <div className="hacker-area">
        <div className="stats hacker-stats">
          <div className="pos">
          <div className="life-bar">
            <div className="life-left hacker-color"></div>
          </div>
          <div className="life-total"></div>
          <div className="name">Hacker</div>
         </div>
          <div className="thumbnail">
            <img src={image1} alt="hacker" />
          </div>
         
        </div>

        <div className="card hacker-card hacker-color">
          <div className="text"></div>
          <div className="power"></div>
        </div>
      </div>

      <div className="player-area">
        <div className="stats player-stats">
          <div className="pos2">
          <div className="life-bar">
            <div className="life-left player-color"></div>
          </div>
          <div className="life-total"></div>
          <div className="name">You</div>
          </div>
          <div className="thumbnail">
            <img src={image2} alt="hacker" />
          </div>
          
        </div>

        <div className="card player-card player-color">
          <div className="text"></div>
          <div className="power"></div>
        </div>

        <div className="card player-card player-color">
          <div className="text"></div>
          <div className="power"></div>
        </div>

        <div className="card player-card player-color">
          <div className="text"></div>
          <div className="power"></div>
        </div>

       
        <button className="next-turn" >Next!</button>
      </div>
    </div>

    <div className="winner-section">
      <div>
        <span className="winner-message">You got hacked!</span>
       
      </div>
    </div>
  </div>
    )
};
export default Play;