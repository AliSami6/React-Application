import React from 'react'

export default function Clipboard() {
    const CopyText =()=>{
        alert("Text Copied")
    }
    const TextOne =()=>{
        alert("Text one")
    }
     const TextTwo =()=>{
      document.write('Past  done')
    }
  return (
    <div>
      <p onCopy={CopyText}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
        cupiditate fugiat dignissimos laborum provident similique eius sed ut ab
        maiores, sint quas esse quam ex quidem nostrum distinctio assumenda
        enim?
      </p>
      <h2 onCut={TextOne}>This is Sami</h2>
      <input type="text" onPaste={TextTwo}  placeholder='input your text'/>
    </div>
  );
}
