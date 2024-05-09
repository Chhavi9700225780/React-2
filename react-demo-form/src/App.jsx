import { useState } from "react";
import "./App.css";
function App() {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password:"",
    email: "",
    accountType:"",
    file:"",
    age:"",
    referrer:"",
    bio: "",
    terms: true,
   
  });

 //  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      // console.log(prevFormData);
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event)
  {
    event.preventDefault();
    console.log("Form Give DAta")
    console.log(formData);
  }
return(
<div className="App">
<h1>Registration Form</h1>
  <p>Please fill out this form with the required information</p>
 
  <form onSubmit={submitHandler}>
    <fieldset>
      <label htmlFor="firstName">Enter Your First Name: 
      <input id="firstName" name="firstName" type="text" 
      value={formData.firstName}
      onChange={changeHandler}
      /></label>
      <label htmlFor="last-name">Enter Your Last Name: 
      <input id="last-name" name="lastName" type="text" required="" 
  value={formData.lastName}
  onChange={changeHandler}
      /></label>
      <label htmlFor="email">Enter Your Email: <input id="email" name="email" type="email" required=""
      value={formData.email}
      onChange={changeHandler}
        /></label>
      <label htmlFor="new-password">Create a New Password: <input id="new-password" 
      name="password" type="password" pattern="[a-z0-5]{8,}" required=""
      value={formData.password}
      onChange={changeHandler}
      /></label>
    </fieldset>
    <fieldset>
      <legend>Account type (required)</legend>
      <label htmlFor="personalaccount"><input id="personalaccount" type="radio" name="accountType" className="inline"
       checked={formData.accountType === "personalaccount"}
       value="personalaccount"
       onChange={changeHandler}
       
       /> Personal</label>
      <label htmlFor="businessaccount">
        <input id="businessaccount" 
        type="radio"
       name="accountType" 
       className="inline"
       checked={formData.accountType === "businessaccount" }
       value="busisnessaccount"
       onChange={changeHandler}
    
      /> Business
      </label>
    </fieldset>
    <fieldset>
      <label htmlFor="profile-picture">Upload a profile picture: <input id="profile-picture" type="file" name="file"
      value={formData.file}
      onChange={changeHandler}

       /></label>
      <label htmlFor="age">Input your age (years): <input id="age" type="number" name="age"
      value={formData.age}
      onChange={changeHandler}
       min="13" max="120"/></label>
      <label for="referrer">How did you hear about us?
        <select id="referrer" name="referrer"
        value={formData.referrer}
        onChange={changeHandler}
        >
          <option value="">(select one)</option>
          <option value="1">freeCodeCamp News</option>
          <option value="2">freeCodeCamp YouTube Channel</option>
          <option value="3">freeCodeCamp Forum</option>
          <option value="4">Other</option>
        </select>
      </label>
      <label htmlFor="bio">Provide a bio:
        <textarea id="bio" name="bio"
        value={formData.bio}
        onChange={changeHandler}
         rows="3" cols="30" placeholder="I like coding on the beach..."
        ></textarea>
      </label>
    </fieldset>
    <label htmlFor="terms-and-conditions">
      <input className="inline" id="terms-and-conditions" type="checkbox"
       required="" name="terms"
       checked={formData.terms}
       onChange={changeHandler}
       /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
    </label>
    <input type="submit" value="Submit"/>
  </form>

</div>
);
}
export default App;
