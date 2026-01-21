import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();

  function turnBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <a className="btn" onClick={turnBack} href="">
      Go back 
    </a>
  );
}