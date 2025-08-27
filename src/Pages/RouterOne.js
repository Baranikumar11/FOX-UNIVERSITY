import Route from "./react-router-dom"

export default function RouterOne{
    return(
         <div>
              <BrowserRooter>
                    <Routes>
                           <Route path="/" element={[<home />]}></Route>
                    </Routes>
              </BrowserRooter>
         </div>
    )
}