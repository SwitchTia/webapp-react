
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const initialData = {
  title: "",
  author: "",
  abstract: "",
  image: null,
};

export default function CreateBookPage() {
  const [formData, setFormData] = useState(initialData);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);


  const navigate = useNavigate();
 
  function updateFormData(event) {
    //to complete
  }



  function handleSubmitForm(event) {
    event.preventDefault();
    // to complete
  }

  
  return (
    <section className="movie-form">
      <h1 >Add a new movies</h1>
    
        <div >
          <form >
          

            <button >Submit</button>
          </form>
        </div>
    
    </section>
  );
}