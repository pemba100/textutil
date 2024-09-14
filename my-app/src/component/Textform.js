import React ,{useState} from 'react'

export default function Textform(props) {
 const handleupclick = () => {
  //  console.log("change was made"+ text);
   let newtext= text.toUpperCase();
   settext(newtext );
 }
 const handledownclick =()=> {
  let smalltext = text.toLowerCase();
  settext(smalltext); 
 }
 
const handleClearclick =()=> {
  let Cleartext=' ';
  settext(Cleartext);
}
 const handleonchange =(event) =>{
  // console.log(" Change");
  settext(event.target.value)
 }
  const [text, settext] = useState(" ");
  // settext("HI "); correct way to change the text
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
    <div className='mb-3'>
        <textarea className='form-control' id='mybox ' value={text}  onChange={handleonchange} rows="8"></textarea>

    </div>
     <button className='btn btn-primary mx-2' onClick={handleupclick}> Convert to uppertext</button>
     <button className='btn btn-primary mx-2' onClick={handledownclick}> Convert to lowertext</button>
     <button className='btn btn-primary mx-2' onClick={handleClearclick}> Cleartext</button>

    </div>
  <div className='container my-3'>
    <h2>Text Summary</h2>
    <p>{text.split ( " ").length}words and {text.length} character</p>
     <p>{0.008*text.split ( " ").length} Minutes to read</p>
     <h2>Preview</h2>
     <p>{text}</p>

  </div>
    </>
  )
}

