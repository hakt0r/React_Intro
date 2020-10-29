
import React          from 'react';

import Table          from '@material-ui/core/Table';
import TableHead      from '@material-ui/core/TableHead';
import TableBody      from '@material-ui/core/TableBody';
import TableRow       from '@material-ui/core/TableRow';
import TableCell      from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper          from '@material-ui/core/Paper';

// import {
//     Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper
// } from '@material-ui/core';

const skillLine = ({name,age,skill},index) =>
    <TableRow key={index}>
        <TableCell>{name}</TableCell>
        <TableCell>{age}</TableCell>
        <TableCell>{skill}</TableCell>
    </TableRow>

function SkillsCleaner (props) {
    const { data } = props;
    return <TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Skill</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        { data.map( skillLine ) }
    </TableBody>
    </Table>
    </TableContainer>;
}

export default SkillsCleaner;