import Popular from './Popular'
export default function Say(){
    return(
        <div class="mt-3">
            <h1>What Clients Say</h1>
            <p>Discover what clients have to say about their experiences working<br /> with me. My client's satisfaction is my greatest achievement!</p>
        <div class="row">
            <div class="col-md-6" style={{textAlign:'left'}}>
            <h2>Mobile App Development</h2>
            <p>I had the pleasure of working with Lily on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.</p>
            <h4>Michael - Technical Manager</h4>
            <p>Marketing @ APPLE INC.</p>
            <div class="d-flex">
                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar1.jpg" style={{width:"50px"}}></img><p>|</p>
                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar2.jpg"style={{width:"50px"}}></img> <p>|</p>          
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg"style={{width:"50px"}} ></img>           
            </div>
            </div>
            <div class="col-md-6">
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg"></img>
            </div>
        </div>
        <Popular/>
        </div>
    )
}