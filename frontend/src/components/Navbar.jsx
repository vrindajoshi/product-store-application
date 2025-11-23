import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <Link to="/">Home</Link> | 
            <Link to="/create">Create</Link>
        </>
     );
}
 
export default Navbar;