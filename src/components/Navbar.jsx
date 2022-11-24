import { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography
} from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = [
    {
        title: 'Apply for Leave',
        href: '/apply'
    },
    {
        title: 'Leave Requests',
        href: '/requests'
    },
    {
        title: 'Admin',
        href: '/admin'
    }
];
const profilePages = ['Account', 'Logout'];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <AppBar position="static" sx={{ background: '#45a' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Link to="/" style={{
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 5,
                                display: { xs: 'none', md: 'flex' },
                                // fontFamily: 'monospace',
                                fontWeight: 700,
                                // letterSpacing: '.3rem'
                            }}
                        >
                            LeavesCentral
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map(({ title, href }) => (
                                <Link key={ title } to={ href } style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>
                                    <MenuItem
                                        key={title}
                                        onClick={handleCloseNavMenu}
                                        sx={{ justifyContent: 'center' }}
                                    >
                                        <Typography textAlign="center">
                                            {title}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            // mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            // fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem'
                        }}
                    >
                        <Link to="/" style={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                                LeavesCentral
                        </Link>
                    </Typography>

                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' }
                    }}>
                        {pages.map(({ title, href }) => (
                            <Link key={ title } to={ href } style={{
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                                <Button
                                    key={title}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {title}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Your Profile">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="" src="" sx={{ background: 'teal' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {profilePages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;