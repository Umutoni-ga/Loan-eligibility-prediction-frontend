import ApplicantForm from "../Components/ApplicantForm";
import classes from './Home.module.css';

function Home() {
    return (
      <div className={classes.Home}>
        <h3 className={classes.headerPrimary}>Enter details to determine you loan eligibility</h3>
        <ApplicantForm/>
      </div>
    );
  }
  
  export default Home;