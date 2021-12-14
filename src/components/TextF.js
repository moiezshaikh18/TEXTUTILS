import React,{useState} from 'react'

 function TextF() {
     const [text,setText] = useState('Enter The Text');
     const handleUpClick=()=>{
         const newtext=text.toUpperCase();
         setText(newtext);
    
     }  
     const handleLoClick=()=>{
        const newtext=text.toLowerCase();
        setText(newtext);
   
    }  
    
     const handleOnChange=(e)=>{
         setText(e.target.value);
        //  console.log("On change");
     }
     return (
        <>
        <div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
            <button type="button" className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To Lowwer Case</button>
        </div>
        <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} charachters</p>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        </div>
       </>
    )
}
export default TextF;
