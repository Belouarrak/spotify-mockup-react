import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        color: "grey",
        paddingTop : 10,
        paddingBottom : 15,
    }});

export default function Followers() {
        const classes = useStyles();


    return(
        <div className={classes.root}>By Kazuhiro Abo - 122.392 followers</div>
    );
}