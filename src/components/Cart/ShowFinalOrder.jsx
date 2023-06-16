import { TableBody, TableCell, TableRow } from "@mui/material";

const ShowOrder = (props) => {
  const eachItemTotal = props.amount * props.price;

  return (
    <TableBody >
      <TableRow key={props.key}>
        <TableCell>{props.index}</TableCell>
        <TableCell component="th" scope="row">
          {props.name}
        </TableCell>
        <TableCell>{props.amount}</TableCell>
        <TableCell>{eachItemTotal}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default ShowOrder;
