import { Link } from 'react-router-dom';
import classes from './Navigator.module.css'

function Navigator() {
    return (
      <div>
        <nav>
          <h1>Loan Approval Prediction</h1>
          <ul className={classes.lst}>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/batchprocessing'> Batch Processing </Link></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navigator;