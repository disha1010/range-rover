import '../scss/main-content.scss';
import mainBg from '../assets/main-bg.png';

function MainContent() {
  return (
    <main className="main container">
      <div className="greating">
        <h1 className="main-title">Range rover</h1>
        <img className="main-image" src={mainBg} alt="gray range rover" />
        <div>
          <p className="main-subtitle">Join the Range Rover waiting list for the opportunity to be among the first to place a pre-order in 2024.</p>
          <button className="button">Join the waiting list</button>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
