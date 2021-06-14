import React,{useState} from 'react';




const Calculator = () => {
const [state1, setstate1] = useState("");


const click=(e)=>{
    setstate1(state1.concat(e.target.name));
}
const clear=()=>{
    setstate1("")
}
const deletebtn=()=>{
    setstate1(state1.slice(0,-1))
}
const calculate=()=>{
    try{
        setstate1(eval(state1).toString());
    }catch(err){
        setstate1("Error")
    }
    
}
    return (
        <>
           <div className='parent'> 
        <div className='main_div'>
            <div className='child'>
                <h1 className='h1'>Calculator</h1>
            </div>


            <div className='child2'>
                <h1 >{state1} </h1>
            </div>

            <div className='child3'>
            <section className='section1'>
            <span className='signs B'> <button className='A' onClick={click} name='+' >+</button></span>
            <span className='signs'><button className='A' onClick={click} name='-'>-</button></span>
            <span className='signs'><button className='A' onClick={click} name='/'>/</button></span>
            <span className='signs'><button className='A' onClick={click} name='*'>&times;</button></span>
            <span  className='signs'><button className='A' onClick={click} name='%'>&#37;</button></span>
            <span className='signs C' ><button className='A' onClick={deletebtn}>C</button></span>
            </section>

            <section className='section2'>
            <div className='numbers'>
            <span ><button  onClick={click} name='1'>1</button></span>
            <span ><button  onClick={click} name='2'>2</button></span>
            <span ><button  onClick={click} name='3'>3</button></span>
            <span ><button  onClick={click} name='4'>4</button></span>
            <span ><button  onClick={click} name='5'>5</button></span>
            <span ><button  onClick={click} name='6'>6</button></span>
            <span ><button  onClick={click} name='7'>7</button></span>
            <span ><button  onClick={click} name='8'>8</button></span>
            <span ><button  onClick={click} name='9'>9</button></span>
            <span ><button  onClick={click} name='0'>0</button></span>
            <span ><button onClick={click} name='.'>.</button></span>
            <span><button onClick={calculate}>=</button></span>
            <span id='clearbtn'><button onClick={clear}>Clear</button></span>
            </div>
            </section>
            </div>
        </div>
        </div>
        </>
    )
}

export default Calculator;
