const User = (props) =>{
    
    return(
        // Transmettre les props dans un objet==> identity 
        <article>
    <h2>{props.identity.firstName} {props.identity.lastName}</h2>
    <a href={'mailto:${props.identity.email}'}>{props.identity.email}</a>
</article>
        )
 
}
export default User;