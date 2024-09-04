import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(project: string, milestones: number, clients: string, details: string) {
  return { project, milestones, clients, details };
}

const rows = [
  createData("Smart Contract for Omnibridge", 2 / 3, "jacob Jones", "View details"),
  createData("Decentralized Voting Platform", 1 / 3, "Votereum Inc", "View details"),
  createData("(Dao) Governance Platform", 1 / 3, "Dao Innovators", "View details"),
  createData("Chainlink Ventures", 3 / 3, "Binance labs", "View details"),
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-[#0A0F29] text-[20px] font-[600]">Project Details</TableCell>
            <TableCell align="right" className="text-[#0A0F29] text-[20px] font-[600]">
              Milestones Completed
            </TableCell>
            <TableCell align="right" className="text-[#0A0F29] text-[20px] font-[600]">
              Clients
            </TableCell>
            <TableCell align="right" className="text-[#0A0F29] text-[20px] font-[600]">
              Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.project} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" className="text-[#0A0F29] text-[18px]">
                {row.project}
              </TableCell>
              <TableCell align="right" className="text-[#0A0F29] text-[18px] ">
                {row.milestones}
              </TableCell>
              <TableCell align="right" className="text-[#0A0F29] text-[18px] ">
                {row.clients}{" "}
              </TableCell>
              <TableCell align="right" className="text-[#2F66F6] text-[18px] ">
                <a href="/">{row.details}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
