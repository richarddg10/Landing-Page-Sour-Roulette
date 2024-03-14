import { useRef } from 'react'
import { Header } from '../../components'
import './LandingPage.css'

export function LandingPage () {
  const home = useRef(null)
  const aboutUs = useRef(null)
  const description = useRef(null)
  const rules = useRef(null)

  const scrollToSection = (data) => {
    if (data === 'home') {
      home.current.scrollIntoView({ behavior: 'smooth' })
    } else if (data === 'about-us') {
      aboutUs.current.scrollIntoView({ behavior: 'smooth' })
    } else if (data === 'description') {
      description.current.scrollIntoView({ behavior: 'smooth' })
    } else if (data === 'rules') {
      rules.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header onSendMessage={scrollToSection} />
      <body>
        <div className='intro-container' ref={home}>
          <div className='intro-info'>
            <img className='logo-intro' src='/logo.png' />
            <p className='text-intro'>Are you ready to challenge chance and demonstrate your skill in pairs? Join the Sour Roulette adventure now!</p>
            <a href='https://sour-roulette-game-kappa.vercel.app/'>
              <button className='play-button' Link>Play now!</button>
            </a>
          </div>
          <div></div>
        </div>
        <div className='about-us-container' ref={aboutUs}>
          <img className='about-us-img' src='/aboutUsImg.png' />
          <div className='about-us-info'>
            <h1 className='about-us-title'>About us
              <span>About us</span>
            </h1>
            <p className='about-us-text'>In Sour Roulette, we are passionate about creating unique gaming experiences that challenge the boundaries between competition and collaboration. We are a team of gaming enthusiasts committed to the thrill of spinning the roulette and working together to achieve victory. Discover the exciting journey that awaits you in our hybrid tabletop and digital game. Join us and enjoy the fun of Sour Roulette.</p>
          </div>
          <img className='coins-img' src='/coinsImg.png' />
        </div>
        <div className='our-game-container'>
          <div className='our-game-info'>
            <h1 className='our-game-title'>Our game
              <span>Sour roulette</span>
            </h1>
            <img className='game-img' src='/gameImgs.png' />
          </div>
          <div></div>
          <img className='ipad-mockup' src='/ipadMockup.png' />
        </div>
        <div className='adjectives-container'>
          <h2>Competitive</h2>
          <h2>Cooperative</h2>
          <h2>Persuasive</h2>
        </div>
        <div className='description-container' ref={description}>
          <h1 className='description-title'>Description
            <span>Description</span>
          </h1>
          <div className='description-info'>
            <div className='description-left-info'>
              <div className='description-1 info-divs'>
                <div>
                  <h2>Exciting Paired Play</h2>
                  <p className='p1'>"Sour Roulette" is an exciting game that fuses competition and collaboration in a unique format of individual and group strategy.</p>
                </div>
                <img src='/descriptionImg1.png' />
              </div>
              <div className='description-2 info-divs'>
                <div>
                  <h2>Challenges and Special Powers</h2>
                  <p className='p2'>With an initial capital to bet, couples face off on each spin of the roulette, where a random number or symbol reveals challenges, riddles, or special powers.</p>
                </div>
                <img src='/descriptionImg2.png' />
              </div>
            </div>
            <div className='description-right-info'>
              <div className='description-3 info-divs'>
                <img src='/descriptionImg3.png' />
                <div>
                  <h2>Roulette: The Protagonist</h2>
                  <p className='p3'>In each match, players immerse themselves in an experience where the roulette is the undisputed protagonist.</p>
                </div>
              </div>
              <div className='description-4 info-divs'>
                <img src='/descriptionImg4.png' />
                <div>
                  <h2>Skill, Strategy, and Victory</h2>
                  <p className='p4'>Success in completing actions determines the game's course, while failure results in penalties from fines to challenges. Who will demonstrate skill, strategy, and cooperation to emerge as winners? Find out in "Sour Roulette," where only one pair will conquer victory and take the ultimate prize.</p>
                </div>
              </div>
            </div>
          </div>
          <img className='line-img' src='/lineImg.png' />
        </div>
        <div className='rules-container' ref={rules}>
          <div className='rules-title-container'>
            <h1 className='rules-title'>Rules
              <span>Rules</span>
            </h1>
            <img src='/adultsIcon.png' />
          </div>
          <div className='rules-cards'>
            <div className='rule-1'>
              <p>Minimum 2 players and maximum 4 to be able to play</p>
            </div>
            <div className='rule-2'>
              <p>Each player starts with $100 dollars</p>
            </div>
            <div className='rule-3'>
              <p>The winner is the player that finishes with the most money</p>
            </div>
            <div className='rule-4'>
              <p>The players will have 1 minute to complete the challenges and riddles</p>
            </div>
            <div className='rule-5'>
              <p>The blue space on the roulette wheel means that the player passes his turn without penance</p>
            </div>
            <div className='rule-6'>
              <p>Teams can only throw the marble once per round</p>
            </div>
            <div className='rule-7'>
              <p>The dollars that the teams lose go to the casino</p>
            </div>
            <div className='rule-8'>
              <p>The game ends when one of the players reaches $500 dollars or when one player runs out of money</p>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}