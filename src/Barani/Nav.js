export  default function Nav(){
return(
<div>
<nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_JXGwMpPe3v-Qx-jVzxo2MliXPDNVbco5A&s" width="150px"></img>
    </a>
    <div>
    <h5 style={{fontWeight:"bold"}}>Email</h5>
    <p>youremail@email.com</p>
    </div>
    <div>
    <h5 style={{fontWeight:"bold"}}>Call</h5>
    <p>Call Us: + 1235 2355 98</p>
    </div>
    <div>
     <button style={{width:"125px",height:"50px",}} class="btn btn-warning" type="submit">Button</button>
    </div>
  </div>
</nav>

<div class="container" >
 <div style={{backgroundColor:"black"}}>   
<nav class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    
    <a class="navbar-brand" style={{color:"white"}} href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ps-5">
          <a class="nav-link active"  style={{color:"white"}}  aria-current="page" href="/Offer">About</a>
        </li>
        <li class="nav-item ps-5">
          <a class="nav-link"  style={{color:"white"}}  href="/Course">Courses</a>
        </li>
         <li class="nav-item ps-5">
          <a class="nav-link"   style={{color:"white"}} href="/Staff">Staff</a>
        </li>
         <li class="nav-item ps-5">
          <a class="nav-link" style={{color:"white"}}  href="/Blog">Blog</a>
        </li>
         <li class="nav-item ps-5">
          <a class="nav-link"  style={{color:"white"}} href="/Contact">Contact</a>
        </li>
        </ul>
        
      <form class="d-flex ps-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
      </form>
      </div>
    </div>
</nav>
</div>
</div>
</div>
)}