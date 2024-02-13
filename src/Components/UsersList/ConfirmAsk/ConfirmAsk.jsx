import { useDispatch } from "react-redux";
import { removeUser } from "../../../Store/usersSlice";
import Button from "../../UI/Button/Button";
import classes from "./ConfirmAsk.module.scss";
import PropTypes from "prop-types";
function ConfirmAsk({ openAndCloseConfirm }) {
  const dispatch = useDispatch();

  const removeOn = () => {
    dispatch(removeUser());
    openAndCloseConfirm();
  };
  return (
    <div>
      <div className={classes.confirmText}>
        <h3>Удаление сотрудника!</h3>
        <p>
          Вы уверены, что хотите удалить сотрудника? Если вы удалите, он будет
          потерян безвозвратно.
        </p>
      </div>

      <div className={classes.confirmButton}>
        <Button onClick={openAndCloseConfirm}>Отменить</Button>
        <Button onClick={removeOn}>Удалить</Button>
      </div>
    </div>
  );
}
ConfirmAsk.propTypes = {
  openAndCloseConfirm: PropTypes.func,
};
export default ConfirmAsk;
