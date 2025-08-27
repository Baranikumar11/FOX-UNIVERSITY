export default function Nav() {
    return (
        <div className="container" >
            <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"ActiveCaption"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{fontFamily:"serif"}}>BOOK MYSHOW</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <form class="d-flex" role="search">
                            <input  style={{width:"500px",fontFamily:"sans-serif"}}class="form-control me-2" type="search" placeholder="Search for Movies,Events,Plays,Sports,Activities" aria-label="Search" />
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           
                            
                            <li class="nav-item dropdown " style={{paddingLeft:"200px"}}>
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Coimbatore
                                </a>
                                <ul class="dropdown-menu" style={{paddingLeft:"350px"}}>
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                            <button class="btn btn-outline-success primary" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Movies</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Streams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Place</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">Activities</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">ListYourShows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">Act</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">Activities</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}