import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// eslint-disable-next-line camelcase
function createData(id, name, version, node, type, status, at) {
    return { id, name, version, node, type, status, at };
}

const rows = [
    createData('kgvec450', 'hienptt45', 'v1.21.6', '1 master · 1 worker', 'Dedicated', 'Succeeded', '9 days ago'),
    createData('torgk5if', 'thanhtv30', 'v1.21.6', '1 master · 5 worker', 'Dedicated', 'Succeeded', '8 days ago'),
    createData('a4axg9wm', 'thanhtv30-1', 'v1.21.6', '1 master · 2 worker', 'Dedicated', 'Succeeded', '7 days ago')
];

export default function TableKubernetes() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="right">Version</TableCell>
                        <TableCell align="right">Nodes</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Created at</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">{row.id}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="right">{row.version}</TableCell>
                            <TableCell align="right">{row.node}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.at}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
