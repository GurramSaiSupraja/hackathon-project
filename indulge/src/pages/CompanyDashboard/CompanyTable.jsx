import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import {companyId as companyId} from '../Login/Login.jsx';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

const columns = [
  { id: 'formType', label: 'Form', minWidth: 170 },
  { id: 'role', label: 'Role', minWidth: 100 },
  {
    id: 'season',
    label: 'season',
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'edit/download',
    label: '',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },
];


export default function StickyHeadTable(props) {

  const companyId = props.companyId;
  console.log(companyId);
  const [FormsData, setFormsData] = React.useState([]);
  const navigate = useNavigate();


useEffect(()=> {
  console.log(companyId);
  if(companyId != null){
    axios.get("http://localhost:5000/CompanyDashboard/"+companyId).then(
    response => {console.log(response.data);
      setFormsData(response.data);
    }).catch((error)=>{
      console.log(error)
    });
  }
  
},[]);
 

const rows = {FormsData}.FormsData;

console.log(rows);

console.log("rows:" + typeof(rows));


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
