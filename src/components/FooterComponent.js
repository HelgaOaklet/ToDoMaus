 import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        //width: 100px,
        bottom:0,
    },
}));

function FooterComponent() {

    const classes = useStyles();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Grid container>
                <Grid item
                      xs={3}
                      >
                    <Typography variant="h6" align="center">
                        E-mail
                    </Typography>
                </Grid>
                <Grid item
                      xs={3}
                >
                    <Typography variant="h6" align="center">
                        telefon
                    </Typography>
                </Grid>
                <Grid item
                      xs={3}
                >
                    <Typography variant="h6" align="center">
                        post
                    </Typography>
                </Grid>
                <Grid item
                      xs={3}
                >
                    <Typography variant="h6" align="center">
                        time
                    </Typography>
                </Grid>
            </Grid>


        </AppBar>
    );
}

export default FooterComponent;


