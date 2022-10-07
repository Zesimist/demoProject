import React, {useState} from 'react'

export default function TexthtmlForm(props) {
    const handleUpClick = ()=>{
        // console.log("Converting to Upper case" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Upper case","success")
    }
    const handledownClick = ()=>{
        // console.log("Converting to Lower case" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lower case","success")
    }
    const handleOnChnage=(event) =>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handleCompare =()=>{
        // const curLen = text.length()
        // const ele = getEle
        
    }
    const handleCopy =()=>{
        var text =  document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success")
    }
    const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space has been removed","success")
    }

    const [text, setText] = useState("Enter your Text here");
    return (
            <>
            <div className="container" id="statement">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis provident ducimus distinctio unde, in excepturi aliquam ipsam dicta delectus, vero quam odit esse possimus illum libero dolorum nisi adipisci similique exercitationem ratione impedit, iure voluptas est. Culpa vitae eum facilis odio beatae magnam eligendi qui alias laborum quo, aut quas quis quae architecto vel eius nobis rem amet earum. Assumenda excepturi vero deleniti amet natus, accusantium qui. Nobis, voluptates illo! Amet earum sed inventore ullam error laborum perspiciatis esse accusantium magnam quas consequuntur aperiam vitae dolorem reiciendis quia possimus reprehenderit fugit laudantium placeat, explicabo molestias fugiat. Ratione, impedit vel.</p>
            </div>
        <div  className="container">
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">What can I do for you</label>
                <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppper Casse</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>remove extra space</button>
                <button className="btn btn-primary mx-2" onClick={handledownClick}>Lower Casse</button>
                <button className="btn btn-primary mx-1" onClick={handleCompare}>compare</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>copy</button>
        </div>
        <div className="container">
            <h3>Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{text}</p>
        </div>
            </>
    )
}
