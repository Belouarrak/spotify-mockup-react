import {Switch} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    downloadContainer: {
        display: "flex",
        width: "100%",
        color: "white",
        justifyContent: "space-between",
        flexWrap: "wrap",
        height: "30px",
        marginTop: "10px"
    },
    download: {
        fontSize: "17px",
        paddingLeft: "25px",
        color: "white",
        paddingTop: "8px",
    },
    switch: {
        paddingRight: "20px",
    }

});

export default function Download(){
    const classes = useStyles();

    return(
        <div className={classes.downloadContainer}>
            <div className={classes.download}>Download</div>
            <div className={classes.switch}>
                <Switch
                    defaultChecked
                    color="default"
                    inputProps={{'aria-label': 'checkbox with default color'}}
                /></div>
        </div>
    )
}