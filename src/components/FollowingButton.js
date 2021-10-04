import {Button, withStyles} from "@material-ui/core";

const Following = withStyles({
    root: {
        background: "none",
        border: '2px solid green',
        borderRadius: 80,
        color: "white",
        height: 35,
        width: 130,
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default function FollowingButton() {
    return(
 <Following>FOLLOWING</Following>
    )
}