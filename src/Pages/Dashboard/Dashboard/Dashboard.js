import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useRouteMatch, Route, Switch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import DasboardHome from '../DashboardHome/DasboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import NewProduct from '../NewProduct/NewProduct';
import Review from '../Review/Review';


const drawerWidth = 250;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link className="text-decoration-none text-dark" to="/home">
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
                <Link className="text-decoration-none text-dark" to={`${url}`}>
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                </Link>
                <Link className="text-decoration-none text-dark" to={`${url}/payment`}>
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary='Payment' />
                    </ListItem>
                </Link>
                {
                    admin && <Link className="text-decoration-none text-dark" to={`${url}/makeAdmin`}>
                        <ListItem button >
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary='Make Admin' />
                        </ListItem>
                    </Link>
                }
                <Link className="text-decoration-none text-dark" to={`${url}/mangeMyOrders`}>
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary='My Orders' />
                    </ListItem>
                </Link>
                {admin && <Link className="text-decoration-none text-dark" to={`${url}/mangeAllOrders`}>
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary='Manage All Orders' />
                    </ListItem>
                </Link>}
                {admin && <Link className="text-decoration-none text-dark" to={`${url}/newproduct`}>
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary='Manage Products' />
                    </ListItem>
                </Link>}
                <Link className="text-decoration-none text-dark" to={`${url}/review`}>
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary='Give Review' />
                    </ListItem>
                </Link>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box>
                    <Switch>
                        <Route exact path={path}>
                            <DasboardHome></DasboardHome>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/mangeMyOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/newproduct`}>
                            <NewProduct></NewProduct>
                        </Route>
                        <Route path={`${path}/mangeAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>

                    </Switch>
                </Box>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;