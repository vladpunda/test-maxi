import { useForm } from "react-hook-form";
import classes from "./FormAddUser.module.scss";
import MaskedInput from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../Store/usersSlice";
import { selectUsers } from "../../../Store/usersSlice";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";
function FormAddUser({ onModalClose }) {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data.phone.length);
    const addId = users[users.length - 1].id + 1;
    const user = {
      ...data,
      id: addId,
      address: { zipcode: data.zipcode },
    };
    dispatch(addUser(user));
    reset();
    onModalClose();
  };

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formAdd}>
          <label>
            Имя:
            <input
              {...register("name", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <div>
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
          </label>
          <label>
            Имя пользователя:
            <input
              {...register("username", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <div>
              {errors?.username && (
                <p>{errors?.username?.message || "Error!"}</p>
              )}
            </div>
          </label>
          <label>
            Электронная почта:
            <input
              {...register("email", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value:
                    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                  message: "Не корректный email",
                },
              })}
            />
            <div>
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
          </label>
          <label>
            Телефон:
            <MaskedInput
              mask={"+7 999 999-99-99"}
              maskChar={""}
              placeholder="+7 999 999-99-99"
              {...register("phone", {
                required: "Поле обязательно к заполнению",
                minLength: 16,
              })}
            />
            <div>
              {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
            </div>
          </label>
          <label>
            Индекс:
            <input {...register("zipcode", { required: false })} />
          </label>
        </div>
        <div className={classes.formButton}>
          <Button
            onClick={() => {
              onModalClose();
              reset();
            }}
          >
            Отменить
          </Button>
          <Button type="submit" disabled={!isValid}>
            Добавить сотрудника
          </Button>
        </div>
      </form>
    </div>
  );
}
FormAddUser.propTypes = {
  onModalClose: PropTypes.func,
};
export default FormAddUser;
