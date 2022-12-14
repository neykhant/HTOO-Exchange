import React from 'react'
import Navbar from '../navbar/Navbar'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import { Box, Button, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GetAppIcon from '@mui/icons-material/GetApp';
import PrintIcon from '@mui/icons-material/Print';
import { useTranslation } from "react-i18next";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import DvrIcon from '@mui/icons-material/Dvr';
import { useNavigate } from 'react-router-dom';
// import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    thead: {
        backgroundColor: "#094708",
    },
    tHColor: {
        color: "#fff",
    }
});


function createData(no, datetime, fromBranch, toBranch, type, amount, fromTransferType,
    toTransferType, remark, Employee) {
    return {
        no, datetime, fromBranch, toBranch, type, amount, fromTransferType,
        toTransferType, remark, Employee
    };
}

const rows = [
    createData(1, "12-08-2022 12-30PM", "Mdy Branch)", "Ygn Branch", "E-Money", 1000, "Kpay(Mg Mg)", "Kpay(Su Su)", "Hello How", "Mg Kyaw"),
    createData(2, "12-08-2022 12-30PM", "Mdy Branch)", "Ygn Branch", "E-Money", 1000, "Kpay(Mg Mg)", "Kpay(Su Su)", "Hello How", "Mg Kyaw"),
    createData(3, "12-08-2022 12-30PM", "Mdy Branch)", "Ygn Branch", "E-Money", 1000, "Kpay(Mg Mg)", "Kpay(Su Su)", "Hello How", "Mg Kyaw"),
    createData(4, "12-08-2022 12-30PM", "Mdy Branch)", "Ygn Branch", "E-Money", 1000, "Kpay(Mg Mg)", "Kpay(Su Su)", "Hello How", "Mg Kyaw"),
    createData(5, "12-08-2022 12-30PM", "Mdy Branch)", "Ygn Branch", "E-Money", 1000, "Kpay(Mg Mg)", "Kpay(Su Su)", "Hello How", "Mg Kyaw"),
    createData(6, "12-08-2022 12-30PM", "Mdy Branch)", "Ygn Branch", "E-Money", 1000, "Kpay(Mg Mg)", "Kpay(Su Su)", "Hello How", "Mg Kyaw"),
];


const BranchTransferList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const classes = useStyles();
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleLink = () => {
        navigate("/admin/create-branch-transfer")
    }

    const handleEdit = (e) => {
        console.log("edit")
    }

    const handleDelete = () => {
        console.log("delete");
    }

    return (
        <>
            <Navbar />
            <div
                style={{
                    // position: "absolute",
                    width: "100%",
                    height: "80%",
                    marginTop: "75px",
                    display: "flex", justifyContent: "center", flexDirection: "column"
                }}
            >
                <Box m={2} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}> {t("branch-transfer.list")}
                    </Typography>
                    <Button variant="contained"
                        size="small" sx={{
                            display: "flex", justifyContent: "space-evenly", alignItems: "center",
                            backgroundColor: "#1dad52", minWidth: "200px", fontSize: "14px", ':hover': {
                                bgcolor: '#1dad52',
                                color: '#fff'
                            }
                        }} onClick={handleLink}>
                        <AddCircleRoundedIcon />
                        <Box>
                            {t("new")}
                        </Box>

                    </Button>
                </Box>
                <Box m={1} display="flex" flexDirection="row" justifyContent="space-between">
                    <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DesktopDatePicker
                                label={t("date")}
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} size="small" />}
                            />

                        </LocalizationProvider>
                        <Button variant="contained"
                            size="small" sx={{
                                textTransform: "none",
                                display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                margin: "3px", padding: "7px",
                                backgroundColor: "#1dad52", minWidth: "100px", fontSize: "14px", ':hover': {
                                    bgcolor: '#1dad52',
                                    color: '#fff'
                                }
                            }} onClick={handleLink}>
                            <DvrIcon />
                            <Box>
                                {t("branch")}
                            </Box>

                        </Button>
                        <Button variant="contained"
                            size="small" sx={{
                                textTransform: "none",
                                display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                margin: "3px", padding: "7px",
                                backgroundColor: "#1dad52", minWidth: "100px", fontSize: "14px", ':hover': {
                                    bgcolor: '#1dad52',
                                    color: '#fff'
                                }
                            }} onClick={handleLink}>
                            <GroupsIcon />
                            <Box>
                                {t("employees")}
                            </Box>

                        </Button>
                    </Box>
                    <Box m={1} display="flex" justifyContent="space-between" alignItems="center">
                        <Button variant="contained"
                            size="small" sx={{
                                textTransform: "none",
                                display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                margin: "3px", padding: "7px",
                                backgroundColor: "#1dad52", minWidth: "100px", fontSize: "14px", ':hover': {
                                    bgcolor: '#1dad52',
                                    color: '#fff'
                                }
                            }} onClick={handleLink}>
                            <GetAppIcon />
                            <Box>
                                {t("excel")}
                            </Box>

                        </Button>
                        <Button variant="contained"
                            size="small" sx={{
                                textTransform: "none",
                                display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                margin: "3px", padding: "7px",
                                backgroundColor: "#1dad52", minWidth: "100px", fontSize: "14px", ':hover': {
                                    bgcolor: '#1dad52',
                                    color: '#fff'
                                }
                            }} onClick={handleLink}>
                            <PrintIcon />
                            <Box>
                                Print
                            </Box>

                        </Button>

                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <TableContainer style={{ width: 1400, marginTop: "5px" }}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.thead}>
                                <TableRow>
                                    <TableCell className={classes.tHColor}>{t("no")} </TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("date-time")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("branch-transfer.from-branch")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("branch-transfer.to-branch")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("type")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("amount")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("branch-transfer.from-transfer-type")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("branch-transfer.to-transfer-type")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("remark")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("employees")}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t("action")}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.no}>
                                        <TableCell component="th" scope="row">
                                            {row.no}
                                        </TableCell>
                                        <TableCell align="center">{row.datetime}</TableCell>
                                        <TableCell align="center">{row.fromBranch}</TableCell>
                                        <TableCell align="center">{row.toBranch}</TableCell>
                                        <TableCell align="center">{row.type}</TableCell>
                                        <TableCell align="center">{row.amount}</TableCell>
                                        <TableCell align="center">{row.fromTransferType}</TableCell>
                                        <TableCell align="center">{row.toTransferType}</TableCell>
                                        <TableCell align="center">{row.remark}</TableCell>
                                        <TableCell align="center">{row.Employee}</TableCell>
                                        <TableCell align="center">
                                            {/* <DisplaySettingsRoundedIcon onClick={handleClickOpen} sx={{ color: "green", fontSize: "25px" }} /> */}
                                            <DriveFileRenameOutlineRoundedIcon onClick={handleEdit} sx={{ color: "#36353d", fontSize: "25px", marginLeft: "5px" }} />
                                            <DeleteForeverRoundedIcon onClick={handleDelete} sx={{ color: "red", fontSize: "25px", marginLeft: "5px" }} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </div>
        </>
    )
}

export default BranchTransferList