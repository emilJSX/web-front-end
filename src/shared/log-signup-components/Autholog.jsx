import { Main } from './Autho.style'
import { useState } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fiveth from './Fiveth';
import Sixth from './Sixth';
import Seventh from './Seventh';
import Login from './Login';
import PasswordRec from './PasswordRec';
import SentRec from './SentRec';
import Finally from './Finally';


function Autholog({ setShow, setShowes }) {
    const[log, setLog] = useState(2)
    const[active, setActive] = useState(1)
    // const[logStep, setLogstep] = useState(2)
    const nextstep = () =>{
        setActive(cur => cur+1)
    }
    const nextsteplog = () =>{
        setLog(cur => cur+1)
    }
    const backSign = () => {
        setLog(cur => cur-1)
    }
    return (<>
        
             { log ===2 && <Main><Login backSign={backSign} nextsteplog={nextsteplog} nextstep={nextstep} setShowes={setShowes} setShow={setShow}/></Main>}
             { active ===2 && <Main><Second nextstep={nextstep} setShow={setShow} setShowes={setShowes} /></Main>}
             { active ===3 && <Main><Third nextstep={nextstep} setShow={setShow} setShowes={setShowes} /></Main>}
             { active ===4 && <Main><Fourth nextstep={nextstep} setShow={setShow} setShowes={setShowes} /></Main>}
             { active ===5 && <Main><Fiveth nextstep={nextstep} setShow={setShow} setShowes={setShowes} /></Main>}
             { active ===6 && <Main><Sixth nextstep={nextstep} setShow={setShow} setShowes={setShowes} /></Main>}
             { active ===7 && <Main><Seventh nextstep={nextstep} setShow={setShow} setShowes={setShowes} /></Main>}
             { log ===3 && <Main><PasswordRec setShowes={setShowes} nextsteplog={nextsteplog} setShow={setShow}/></Main>}
             { log ===4 && <Main><SentRec setShowes={setShowes}  nextsteplog={nextsteplog} setShow={setShow}/></Main>}
             { log === 5 && <Finally  setShow={setShow}/>}
             { active ===1 && log ===1 && <Main><First nextsteplog={nextsteplog} nextstep={nextstep} setShow={setShow}/></Main>}
    </>)
}
export default Autholog;