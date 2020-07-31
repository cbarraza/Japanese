import React from 'react';
// Material UI
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// Material UI Icon
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// Components
import Loading from '../Loading';

const containerStyle = {
  height: '100%'
};

const TableComponent = ({ columns, data, loading, onDelete, onEdit, showActions }) => {
  return (
    loading ?
    <Loading /> :
    <TableContainer component={Paper} style={containerStyle}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {
              columns.map(column => (
                <TableCell key={column.key}>{column.label}</TableCell>
              ))
            }
            { showActions && <TableCell>Acciones</TableCell> }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row._id}>
              {
                columns.map(column => (
                  <TableCell key={`${row._id}-${column.key}`}>{row[column.key]}</TableCell>
                ))
              }
              { 
                showActions && 
                <TableCell>
                  <IconButton onClick={() => onEdit(row)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(row)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell> 
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
