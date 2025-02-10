
import './App.css'
import Navbar from './Components/Navbar'
import ScoreCard from './Components/ScoreCard'
import QuickLinks from './Components/QuickLinks'
import TopTeam from './Components/TopTeam'
import LatestVideos from './Components/LatestVideos'
import MatchInfo from './Components/MatchInfo'
import AdvWithUs from './Components/AdvWithUs'


function App() {


  return (
    <>
    <Navbar />
    <div className='contaner'>
    <ScoreCard />
    <QuickLinks />
    <LatestVideos />
    <MatchInfo />
    <AdvWithUs />
    </div>
    <TopTeam />
    
    
    </>
  )
}

export default App
