import Navigator from "./Navigator";
import classes from './Layout.module.css';

const  Layout = (props)=>{

return (
    <div className={classes.container}>
    <Navigator/>
    <main className={classes.main}>
        {props.children}
    </main>
</div>
)
}

export default Layout;