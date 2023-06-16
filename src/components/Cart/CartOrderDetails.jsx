import { useContext } from "react";
import Modal from "../UI/Modal";
import Classes from "./CartOrderDetails.module.css";
import CartContext from "../../Store/cart-context";
import ShowOrder from "./ShowFinalOrder";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const OrderDetails = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;

  const orderedItems = (
    <TableContainer component={Paper} className={Classes["cart-items"]}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Sl. No.</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        {cartCtx.items.map((item, index) => (
          <ShowOrder
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            index={index + 1}
          />
        ))}
      </Table>
    </TableContainer>
  );
  return (
    <Modal onClose={props.onClose}>
      <h2>Order Summary</h2>
      {orderedItems}
      <div className={Classes.total}>
        <span>Total Amount: </span>
        <span>{totalAmount}</span>
      </div>
      <div className={Classes.actions}>
        {" "}
        <button className={Classes["button--alt"]} onClick={props.onClose}>
          Back
        </button>
        <button className={Classes.button} onClick={props.showThanks}>Order</button>
      </div>
    </Modal>
  );
};

export default OrderDetails;
