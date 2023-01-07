import '../styles/Submit.css';

function toggleWrapperThankYou(e)
{
  const card = e.target.closest('.Card');
  const rate = card.querySelector('.Note.active');
  if(rate == null)
  {
    alert('Please rate us first before submit');
  }
  else
  {
    const rateSpan = card.querySelector('.finalRating');
    rateSpan.innerText = rate.innerText;
    card.querySelector('.rateWrapper').style.display = "none";
    card.querySelector('.Thankyou').style.display = "flex";
  }
  ;
}
function Submit(props) {
    return (
      <button type = 'button' className="Submit" onClick={(e) => toggleWrapperThankYou(e)}>
          SUBMIT
      </button>
    );
  }

export default Submit;
