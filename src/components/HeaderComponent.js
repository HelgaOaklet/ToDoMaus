import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Avatar from "@material-ui/core/Avatar";
import avatar from '../assects/Avatar.jpg';
//import avatar from './AvatarNew';
//import { makeStyles} from "@material-ui/core/styles";

function HeaderComponent() {
    return (
        <AppBar position="relative">
            <Grid container>
                <Grid item
                    xs={6}
                >
                    <div style={{
                            width: '450px',
                            margin: '30px auto'
                         }}
                    >
                        <Typography variant="h2">
                            Todo aplication
                        </Typography>
                        <Typography variant="subtitle2"
                                    align='right'
                        >
                            By Helga
                        </Typography>
                    </div>
                </Grid>
                <Grid item
                    xs={6}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Avatar alt="Helga"
                            src={avatar}
                            size="large"
                            classes={{
                                root: 'custom-avatar'
                            }}
                    />
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default HeaderComponent;
