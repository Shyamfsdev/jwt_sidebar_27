// // "use client"


// // import React, { useEffect } from 'react';
// // import { useState } from 'react';
// // import { Box, Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
// // import { Checkbox, Switch, FormControlLabel } from '@mui/material';
// // import "bootstrap/dist/css/bootstrap.min.css"
// // import axios from "axios";
// // import PAGE from '../info/page';

// // const EnhancedTable = () => {
// //   const [dense, setDense] = useState(false);
// //   const [page, setPage] = useState(0);
// //   const [rowsPerPage, setRowsPerPage] = useState(5);
// //   const [selected, setSelected] = useState([]);
// //   const [order, setOrder] = useState('asc');
// //   const [orderBy, setOrderBy] = useState('calories');
// // //   const [result,setResult] = useState([]);

  

// //   const rows = [
// //     { id: 1, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// //     { id: 2, name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
// //     { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
// //     { id: 4, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// //     { id: 5, name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
// //     { id: 6, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
// //     { id: 7, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// //     { id: 8, name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
// //     { id: 9, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
// //     // ...
// //   ];

// // //   useEffect(()=>{
// // //     try {
// // //         const data =  PAGE();
// // //         console.log(data);
// // //       } catch (error) {
// // //         console.log("error while fetching");    
// // //       }
// // //   },[])

// //   try {
// //     const data =  PAGE();
// //     console.log(data);
// //     setResult(data);
// //   } catch (error) {
// //     console.log("error while fetching");    
// //   }
  
  

// //   const handleSelectAllClick = (event) => {
// //     if (event.target.checked) {
// //       const newSelected = rows.map((n) => n.id);
// //       setSelected(newSelected);
// //       return;
// //     }
// //     setSelected([]);
// //   };

// //   const handleClick = (event, id) => {
// //     const selectedIndex = selected.indexOf(id);
// //     let newSelected = [];

// //     if (selectedIndex === -1) {
// //       newSelected = newSelected.concat(selected, id);
// //     } else if (selectedIndex === 0) {
// //       newSelected = newSelected.concat(selected.slice(1));
// //     } else if (selectedIndex > 0) {
// //       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
// //     }

// //     setSelected(newSelected);
// //   };

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0);
// //   };

// //   const handleChangeDense = (event) => {
// //     setDense(event.target.checked);
// //   };

// //   const isSelected = (id) => selected.indexOf(id) !== -1;

// //   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

// //   const visibleRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

// //   return (
// //     <Box sx={{ width: '100%' }} className="mt-5">
// //       <Paper sx={{ width: '100%', mb: 2 }}>
// //         <TableContainer>
// //           <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
// //             <TableBody>
// //               {visibleRows.map((row) => (
// //                 <TableRow
// //                   hover
// //                   onClick={(event) => handleClick(event, row.id)}
// //                   role="checkbox"
// //                   aria-checked={isSelected(row.id)}
// //                   tabIndex={-1}
// //                   key={row.id}
// //                   selected={isSelected(row.id)}
// //                   sx={{ cursor: 'pointer' }}
// //                 >
// //                   <TableCell padding="checkbox">
// //                     <Checkbox
// //                       color="primary"
// //                       checked={isSelected(row.id)}
// //                       inputProps={{
// //                         'aria-labelledby': `enhanced-table-checkbox-${row.id}`,
// //                       }}
// //                     />
// //                   </TableCell>
// //                   <TableCell component="th" id={`enhanced-table-checkbox-${row.id}`} scope="row" padding="none">
// //                     {row.name}
// //                   </TableCell>
// //                   <TableCell align="right">{row.calories}</TableCell>
// //                   <TableCell align="right">{row.fat}</TableCell>
// //                   <TableCell align="right">{row.carbs}</TableCell>
// //                   <TableCell align="right">{row.protein}</TableCell>
// //                 </TableRow>
// //               ))}
// //               {emptyRows > 0 && (
// //                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
// //                   <TableCell colSpan={6} />
// //                 </TableRow>
// //               )}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //         <TablePagination
// //           rowsPerPageOptions={[5, 10, 25]}
// //           component="div"
// //           count={rows.length}
// //           rowsPerPage={rowsPerPage}
// //           page={page}
// //           onPageChange={handleChangePage}
// //           onRowsPerPageChange={handleChangeRowsPerPage}
// //         />
// //       </Paper>
// //       <FormControlLabel
// //         control={<Switch checked={dense} onChange={handleChangeDense} />}
// //         label="Dense padding"
// //       />
// //     </Box>
// //   );
// // };

// // export default EnhancedTable;


// "use client"

// import React, { useEffect, useState } from 'react';
// import { Box, Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
// import { Checkbox, Switch, FormControlLabel } from '@mui/material';
// import "bootstrap/dist/css/bootstrap.min.css"
// // import { fetchData } from '../info/dataFetcher'; // Adjust the path as needed
// import PAGE from '../info/page';

// const EnhancedTable = () => {
//   const [dense, setDense] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [selected, setSelected] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//         try {
//             const result = await PAGE();
//             console.log("the result in the login page is" ,result)
//             setData(result);
//         } catch (error) {
//            console.log("error fetching data while") 
//         }
      
//     };
//     getData();
//   }, []);

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = data.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (id) => selected.indexOf(id) !== -1;

//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

//   const visibleRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <Box sx={{ width: '100%' }} className="mt-5">
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <TableContainer>
//           <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
//             <TableBody>
//               {visibleRows.map((row) => (
//                 <TableRow
//                   hover
//                   onClick={(event) => handleClick(event, row.id)}
//                   role="checkbox"
//                   aria-checked={isSelected(row.id)}
//                   tabIndex={-1}
//                   key={row.id}
//                   selected={isSelected(row.id)}
//                   sx={{ cursor: 'pointer' }}
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       color="primary"
//                       checked={isSelected(row.id)}
//                       inputProps={{
//                         'aria-labelledby': `enhanced-table-checkbox-${row.id}`,
//                       }}
//                     />
//                   </TableCell>
//                   <TableCell component="th" id={`enhanced-table-checkbox-${row.id}`} scope="row" padding="none">
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="right">{row.calories}</TableCell>
//                   <TableCell align="right">{row.fat}</TableCell>
//                   <TableCell align="right">{row.carbs}</TableCell>
//                   <TableCell align="right">{row.protein}</TableCell>
//                 </TableRow>
//               ))}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// };

// export default EnhancedTable;


// src/components/EnhancedTable.js
"use client"

import React, { useEffect, useState } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import { Checkbox, Switch, FormControlLabel } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchData } from '../info/datafetcher';

const EnhancedTable = () => {
  const [dense, setDense] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        console.log("Fetched data:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: '100%' }} className="mt-5">
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isSelected(row.id)}
                  tabIndex={-1}
                  key={row.id}
                  selected={isSelected(row.id)}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isSelected(row.id)}
                      inputProps={{
                        'aria-labelledby': `enhanced-table-checkbox-${row.id}`,
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" id={`enhanced-table-checkbox-${row.id}`} scope="row" padding="none">
                    {row.name} {/* Adjust based on your data structure */}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell> {/* Adjust based on your data structure */}
                  <TableCell align="right">{row.fat}</TableCell> {/* Adjust based on your data structure */}
                  <TableCell align="right">{row.carbs}</TableCell> {/* Adjust based on your data structure */}
                  <TableCell align="right">{row.protein}</TableCell> {/* Adjust based on your data structure */}
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
};

export default EnhancedTable;
