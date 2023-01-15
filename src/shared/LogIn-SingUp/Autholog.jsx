import { Main, OpacityBlog } from './Autho.style'
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
    const [log, setLog] = useState(2)
    const [active, setActive] = useState(1)
    // const[logStep, setLogstep] = useState(2)
    const nextstep = () => {
        setActive(cur => cur + 1)
    }
    const nextsteplog = () => {
        setLog(cur => cur + 1)
    }
    const backSign = () => {
        setLog(cur => cur - 1)
    }
    return (
        <>

            {log === 2 &&
               <Main>
                <OpacityBlog></OpacityBlog> 
                <Login backSign={backSign} nextsteplog={nextsteplog} nextstep={nextstep} setShowes={setShowes} setShow={setShow} />
              </Main>}
            {active === 2 && 
              <Main>
                 <OpacityBlog></OpacityBlog>
                <Second nextstep={nextstep} setShow={setShow} setShowes={setShowes} />
              </Main>}
            {active === 3 && 
              <Main>
                <OpacityBlog></OpacityBlog>
                <Third nextstep={nextstep} setShow={setShow} setShowes={setShowes} />
              </Main>}
            {active === 4 && 
              <Main>
                 <OpacityBlog></OpacityBlog>
                <Fourth nextstep={nextstep} setShow={setShow} setShowes={setShowes} />
              </Main>}
            {active === 5 && 
                <Main>
                     <OpacityBlog></OpacityBlog>
                    <Fiveth nextstep={nextstep} setShow={setShow} setShowes={setShowes} />
                </Main>}
            {active === 6 && 
                 <Main>
                     <OpacityBlog></OpacityBlog>
                    <Sixth nextstep={nextstep} setShow={setShow} setShowes={setShowes} />
                  </Main>}
            {active === 7 && 
                  <Main>
                     <OpacityBlog></OpacityBlog>
                    <Seventh nextstep={nextstep} setShow={setShow} setShowes={setShowes} />
                   </Main>}
            {log === 3 && 
                  <Main>
                     <OpacityBlog></OpacityBlog>
                    <PasswordRec setShowes={setShowes} nextsteplog={nextsteplog} setShow={setShow} />
                  </Main>}
            {log === 4 && 
                <Main>
                     <OpacityBlog></OpacityBlog>
                    <SentRec setShowes={setShowes} nextsteplog={nextsteplog} setShow={setShow} />
                </Main>}
            {log === 5 && <Finally setShow={setShow} />}
            {active === 1 && log === 1 && 
                 <Main>
                     <OpacityBlog></OpacityBlog>
                    <First nextsteplog={nextsteplog} nextstep={nextstep} setShow={setShow} />
                 </Main>}

        </>
    )
}
export default Autholog;