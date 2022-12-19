import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { withStyles } from '@material-ui/core/styles';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import { useNavigate } from "react-router-dom";

function createData(Id, branch_name, stack_qty, phone, address) {
    return { Id, branch_name, stack_qty, phone, address };
}

const rows = [
    createData(1, 'Yangon Main ', '23', '09-98765432', "Mandalay-Yangon"),
    createData(2, 'Yangon Main ', '23', '09-98765432', "Mandalay-Yangon"),
    createData(3, 'Yangon Main ', '23', '09-98765432', "Mandalay-Yangon"),
    createData(4, 'Yangon Main ', '23', '09-98765432', "Mandalay-Yangon"),
    createData(5, 'Yangon Main ', '23', '09-98765432', "Mandalay-Yangon"),
    createData(6, 'Yangon Main ', '23', '09-98765432', "Mandalay-Yangon"),
    
];

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'green',
            },
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);



const BranchList = () => {

    const navigate = useNavigate();

    const handleEdit = (e) => {
        console.log("edit")
    }

    const handleDelete = () => {
        console.log("delete");
    }

    const handleDetail = () => {
        console.log("detail")
    }

    const handleLink = () => {
        navigate("/admin/create-branch")
    }
    return (
        <div
            style={{
                // position: "absolute",
                width: "100%",
                height: "80%",
                marginTop: "75px",
                display: "flex", flexDirection: "column"
            }}
        >
            <Box mt={2}>
                <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>Branch စာရင်း
                </Typography>
            </Box>
            <Box m={1} display="flex" justifyContent="space-between" alignItems="center">
                <CssTextField
                    size='small'
                    label="Search"
                    className="search"
                    name="search"
                    // onChange={this.onChange}
                    type="text"
                    autoComplete=""
                    margin="normal"
                    inputProps={{
                        style: { fontFamily: 'nunito', color: 'black' },
                    }}

                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRoundedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" size="small" sx={{
                    backgroundColor: "#1dad52", minWidth: "200px", fontSize: "14px", ':hover': {
                        bgcolor: '#1dad52',
                        color: '#fff'
                    }
                }} onClick={handleLink}>
                    <AddCircleRoundedIcon />
                    အသစ်ထည့်မည်</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#094708", }}>
                        <TableRow>
                            <TableCell sx={{ color: "white", fontSize: "16px" }}>စဉ်</TableCell>
                            <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">Branch အမည်</TableCell>
                            <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">ဝန်ထမ်းအရေအတွက်</TableCell>
                            <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">ဖုန်းနံပါတ်</TableCell>
                            <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">နေရပ်လိပ်စာ</TableCell>
                            <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.Id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Id}
                                </TableCell>
                                <TableCell align="right">{row.branch_name}</TableCell>
                                <TableCell align="right">{row.stack_qty}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">
                                    <DisplaySettingsRoundedIcon onClick={handleDetail} sx={{ color: "green", fontSize: "25px" }} />
                                    <DriveFileRenameOutlineRoundedIcon onClick={handleEdit} sx={{ color: "#36353d", fontSize: "25px", marginLeft: "5px" }} />
                                    <DeleteForeverRoundedIcon onClick={handleDelete} sx={{ color: "red", fontSize: "25px", marginLeft: "5px" }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BranchList

