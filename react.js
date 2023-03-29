 import React from 'react'
 
 function react() {
   return (
      <form>
         <form action="">
        <fieldset> 
            <legend>Intershala Assignment</legend>
    Name:<input type="text" name="name" placeholder="Please enter your name here"/>
   <br>
   <br>
   <button>My Arg</button>
    <select name="" id=""> 
    <option value="">False</option>
    <option value="">True</option>
</select>
<br>
<br>
<button>X</button>
<select name="" id=""> 
<option value="">True</option>
<option value="">False</option>
</select>
<br>
<br>
<button>+add arg</button>
<br>
<br>
<select name="" id=""> 
    <option value="">or</option>
</select>
<button>X</button>
<br>
<br>
<select name="" id=""> 
    <option value="">My Org</option>
</select>
<button>X</button>
<br>
<br>
<select name="" id=""> 
    <option value="">X</option>
</select>
<button>X</button>
<br>
<br>
<select name="" id=""> 
    <option value="">And</option>
</select>
<button>X</button>
<br>
<br>
<select name="" id=""> 
    <option value="">False</option>
    <option value="">True</option>
</select>
<button>X</button>
<br>
<br>
<select name="" id=""> 
    <option value="">My Arg</option>
</select>
<button>X</button>
<br>
<br>
<button>+add op</button>
<br>
<br>
<button>+add op</button>
<br>
<br>
Result:True Line
    <br>
    <br>
    Address:<textarea name="address"></textarea>
    <br>
    <br>
    Gender:
    <input type="radio" value="m" name="gender"/>Male
    <input type="radio" value="f" name="gender"/>Female
    <input type="radio" value="o" name="gender"/>other
    <br>
    <br>
    Country
    <select name="India" id="India">
        <option value=""> Please select a country</option>
        <optgroup label="Asia"> 
        <option value="india">India</option>
        <option value="America">America</option>
    </optgroup>
        <option value="UAE">UAE</option>
        <option value="dubai">Dubai</option>
    </select>
    <br>
    <br>
    Hobbies:
    <input type="checkbox"name="Hobbies"/>Dancing
    <input type="checkbox"name="Hobbies"/>Singing
    <input type="checkbox"name="Hobbies"/>Painting
    <br>
    <br>
    Image:
    <input type="file"name="Image"/>
    <br>
    <br>
    <input type="submit" value="Send"/>
    <input type="reset" value="Reset"/>
</fieldset> 
      </form>
   )
 }
 
 export default react
 