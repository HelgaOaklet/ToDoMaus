 import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';


function FooterComponent() {
    return (
        <AppBar position="fixed"
                color="primary"
                classes={{
                    root: 'footerStyle'
                }}
        >
            <div className="footer">
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
            </div>
        </AppBar>
    );
}

export default FooterComponent;


