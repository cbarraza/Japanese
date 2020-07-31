import React from 'react';
// Material UI
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// Components
import Loading from '../Loading';

const TableComponent = ({ columns, data, loading, onDelete, onEdit, showActions }) => {
  return (
    loading ?
    <Loading /> :
    <TableContainer component={Paper}>
      <Table>
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
            <TableRow key={row.key}>
              {
                columns.map(column => (
                  <TableCell key={`${row.key}-${column.key}`}>{row[column.key]}</TableCell>
                ))
              }
              { showActions && <TableCell>Acciones</TableCell> }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
