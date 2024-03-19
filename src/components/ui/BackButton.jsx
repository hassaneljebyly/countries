import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="back-btn"
      onClick={() => {
        navigate(-1);
      }}
    >
      <span className="back-btn__icon invertIcon"></span>
      <span className="back-btn__text">back</span>
    </button>
  );
}
