import React from "react";
import PropTypes from "prop-types";
function Profile(props){
return (
    <div>
        <div style={{backgroundColor:"white",width:"550px",height:"550px",margin:"auto",marginTop:"60px",marginBottom:"30px"}}>
       
            <div className="part1" style={{width:"100%",height:"90%",display:"flex"}}>

                <div className="part11" style={{height:"100%",width:"50%"}}>
                  {/* image  props as sa children  */}
                   <img style={{width:"80%",height:"70%",boxShadow:"7px 2px 11px black"}} src={props.children}></img> 
                   {/* Fullname props */}
                   <h1 style={{color:"#F25835"}}>{props.FullName}</h1> 
                    {/* profession  */}
                    <h4 style={{color:"black"}}>{props.profession}</h4> 
                </div>
                      <hr style={{border:"1px double black" ,height:"500"}}/>

                <div className="part12" style={{height:"100%",width:"50%",paddingTop:"70px"}}>
                     {/* bio */}
                    <h3 style={{color:"#333333",fontFamily:"Arial,serif",fontSize:"14px",lineHeight:"30px"}}>{props.bio}</h3> 
                </div>

            </div>
       
            <div className="part2" style={{width:"100%",height:"10%"}}>
                  {/* button  calling handleName Function */}
              <button onClick={()=>props.hName(props.FullName)} style={{backgroundColor:"#F25835",borderColor:"#F25835",color:"black",height:"50px",width:"150px",marginBottom:"30px",fontSize:"20px"}}>Envoyer</button>  
          
            </div>
        </div>
        
    </div>
        
    );
   
}
    // Defautl props 
    Profile.defaultProps = {
        FullName: "Radhia Rahmani"
      }
 
   // Validating Props types 
   Profile.propTypes = {
    FullName:PropTypes.string,
   bio: PropTypes.string,
   profession:PropTypes.string
  };

export default Profile;