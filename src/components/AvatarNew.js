import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
//import avatar from '../assects/Avatar.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function ImageAvatar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Helga"
                    src="/assects/Avatar.jpg"
                    className={classes.large} />
        </div>
    );
}

export default ImageAvatar;