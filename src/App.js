import React,{useRef,useEffect} from 'react'

const App=()=>{
  const data=useRef(null)

  const submit=(event)=>{
    event.preventDefault();
    console.log(data.current.value);
  }

  useEffect(()=>{
    data.current.focus();
  },[])

  return(
    <center>
    <form onSubmit={submit}>
        <input ref={data} type="text" placeholder='Enter the name'/>
        <input type="submit"/>
    </form>
    </center>
  )
}

export default App