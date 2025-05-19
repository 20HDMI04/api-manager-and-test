import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData (
    row: number,
    data1: string,
    data2: string,
    style: string = "bg-[var(--color-creamySecondary)]",
) {
    return { row, data1, data2, style };
}

interface TableProps {
  rows: string[][];
}

export default function AccessibleTable({ rows }: TableProps) {
    let perrow: any[] = [];
    let row: number = 0;
    for (const e of rows) {
        if(row % 2 === 0) {
            perrow.push(createData(row, e[0], e[1], ""));
        } else {
            perrow.push(createData(row, e[0], e[1], "bg-[var(--color-creamy)]"));
        }
        row+=1;
    }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableBody>
          {perrow.map((row) => (
            <TableRow key={row.row} className={row.style}>
              <TableCell component="th" scope="row" align="left">
                <p className='playfair-display-700 h-0 ms-[30%]'>{row.data1}</p>
              </TableCell>
              <TableCell align="left" ><p className='playfair-display-400 h-0 ms-[30%]'>{row.data2}</p></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
