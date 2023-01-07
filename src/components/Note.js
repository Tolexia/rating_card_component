import '../styles/Note.css';


function toggleActive(e)
{
  e.target.parentNode.querySelectorAll('.active').forEach(node => node.classList.remove('active'));
  e.target.classList.add('active');
}

function Note(props) {
    return (
      <button type = 'button' className="Note" onClick={(e) => toggleActive(e)}>
          {props.value}
      </button>
    );
  }

export default Note;
