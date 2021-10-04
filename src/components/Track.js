import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    tracklistContainer: {
        display: "flex",
        paddingLeft: "18px",
        width: "100%",
        color: "white",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "30px",
    },
    title: {
        color: "white",
        alignContent: "center",
    },
    artist: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    info: {
        color: "grey",
        paddingLeft: "20px",
    },
    icon: {
        paddingRight: "20px",
        color: "grey",
        paddingBottom: "10px",
    }
});


export default function Track(){
    const classes = useStyles();

return(
    <div className={classes.root}>
    <div className={classes.tracklistContainer} >
        <h3 className={classes.title}>All I want LOL - Radio Mix</h3>
    </div>

    <div className={classes.artist}>
        <p className={classes.info}>Frank Walker</p>
        <div className={classes.icon}><MoreVertIcon fontSize={"default"}/></div>
    </div>
    </div>);
};