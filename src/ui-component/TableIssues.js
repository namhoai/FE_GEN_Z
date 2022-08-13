import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line camelcase
function createData(id, code, service, handler, type, status, at) {
    return { id, code, service, handler, type, status, at };
}

const rows = [
    createData('1254', 'VM_001', 'VM', 'Vu Hoai Nam', 'Importance', 'During', '9 days ago'),
    createData('1255', 'K8S_001', 'KUBERNETES', 'Vu Hoai Nam', 'Normal', 'Done', '8 days ago'),
    createData('1256', 'DB_001', 'DATABASE', 'Vu Hoai Nam', 'Normal', 'TO-DO', '7 days ago')
];

export default function TableIssues() {
    const navigate = useNavigate();

    const onClick = (id) => {
        navigate(`/utils/issue-detail?id=${id}`);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Error code</TableCell>
                        <TableCell align="center">Service</TableCell>
                        <TableCell align="right">Handler</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Created at</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                <a
                                    style={{ textDecoration: 'underline', color: '#002cec', cursor: 'pointer' }}
                                    onClick={() => onClick(row.id)}
                                >
                                    {row.id}
                                </a>
                            </TableCell>
                            <TableCell align="left">{row.code}</TableCell>
                            <TableCell align="center">{row.service}</TableCell>
                            <TableCell align="right">{row.handler}</TableCell>
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
