import Contact from './Contact'
export default function Popular(){
    return(
        <div className="mt-5 pt-5">
            <h5>POPULAR CLIENTS</h5>
            <h2>Trusted by over 10,000+ <br/> clients</h2>
            <div class="d-flex container gap-5 justify-content-evenly mt-4" style={{color:"grey"}}>
                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg" style={{width:'150px'}}></img>
                  <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg" style={{width:'150px'}}></img>
                  <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-pinterest.svg" style={{width:'150px'}}></img>
                   <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-google.svg" style={{width:'150px'}}></img>
                    <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-amazon.svg" style={{width:'150px'}}></img>
                     <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-netflix.svg" style={{width:'150px'}}></img>
                </div>
                <Contact />
        </div>
    )
}