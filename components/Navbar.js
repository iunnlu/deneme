import React from 'react';

const Navbar = () => {
    return(
        <nav>
            <div className="row" style={{height:"600px", backgroundColor:"#7B241C", borderTop:"3px solid #212F3D", borderBottom:"3px solid #212F3D", marginBottom:"20px"}}>
                <div className="col" style={{
                        backgroundImage:`url("https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&w=1000&q=80")`, 
                        backgroundRepeat:"no-repeat", 
                        backgroundSize:"cover",
                        borderLeft:"5px solid white"
                }}>
                    <p style={{
                        textAlign:"center", 
                        paddingTop:"250px",  
                        fontFamily:"Century Gothic", 
                        color:"white",
                    }}>
                        <h2 style={{fontSize:"70px", marginBottom:"25px"}}>İ L H A N&nbsp;&nbsp;&nbsp;Ü N L Ü</h2>
                        <p style={{fontSize:"35px"}}>SOFTWARE&nbsp;&nbsp;DEVELOPER</p>
                        <p style={{fontSize:"70px"}}>~</p>
                    </p>
                </div>
                <style jsx>{`
                    .nav-link{
                        color: white;
                        font-size: 20px
                    }
                `}</style>
            </div> */}
        </nav>
    )
}


export default Navbar;