import '../styles/Thankyou.css';
import {ReactComponent as Thankyoulogo}  from '../assets/illustration-thank-you.svg';

function Thankyou() {
  return (
    <div className='Thankyou'>
        <Thankyoulogo />
        <h4>You selected <span className='finalRating'></span> out of 5</h4>
        <h2>Thank you!</h2>
        <p>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
    </div>
  );
}

export default Thankyou;
