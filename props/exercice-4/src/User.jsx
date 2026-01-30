const User = (props)=>{
    
   return(
 
   <article>
    <h2>{props.user.firstName} {props.user.lastName}</h2>
    <a href={'mailto:{props.user.email}'}>{props.user.email}</a>
</article>    
  
       )

}

export default User; 