import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
function Homepage({handleLogin}){
    return (
        <div>
            <h1>Welcome to ShareBnB!</h1>
            <LoginForm handleLogin={handleLogin}/>
            <Link to="/register">Register</Link>
        </div>
    )
}
export default Homepage;