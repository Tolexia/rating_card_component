import '../styles/Star.css';
import {ReactComponent as Starlogo}  from '../assets/icon-star.svg';
function Star(props) {
  return (
    <button type = 'button' className="Star" onClick={(e) => e.target.classList.add('active')}>
        <Starlogo />
    </button>
  );
}

export default Star;
