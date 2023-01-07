import '../styles/Card.css';
import Star from './Star.js';
import Note from './Note.js';
import Submit from './Submit.js';
import Thankyou from './Thankyou.js';

function Card() {
    const notes = [];
    for (var i=1; i < 6; i++) {
        notes.push(<Note key={i} value = {i} />)
    }
  return (
    <div className="Card">
        <div className = "rateWrapper">
          <Star />
          <h3> How did we do?</h3>
          <p>  
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          <div className='buttons'>
                {notes}
          </div>
          <div className='submitWrapper'>
            <Submit />
          </div>
        </div>
        <Thankyou />
    </div>
  );
}

export default Card;
