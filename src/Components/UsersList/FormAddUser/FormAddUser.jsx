import { useForm } from "react-hook-form";
import classes from "./FormAddUser.module.scss";
import MaskedInput from "react-input-mask";
import { useDispatch } from "react-redux";
import { addUser } from "../../../Store/usersSlice";
export default function FormAddUser() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  function onSubmit(data) {
    const user = {
      ...data,
      id: Math.floor(Math.random() * 1000),
      address: { zipcode: data.zipcode },
    };
    dispatch(addUser(user));
    reset();
  }
  return (
    <div className={classes.formAdd}>
      <h1>forma</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register("name", { required: "Поле обязательно к заполнению" })}
          />
          <div>
            {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
          </div>
        </label>
        <label>
          User Name:
          <input
            {...register("username", {
              required: "Поле обязательно к заполнению",
            })}
          />
          <div>
            {errors?.username && <p>{errors?.username?.message || "Error!"}</p>}
          </div>
        </label>
        <label>
          Email:
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
          Phone:
          <MaskedInput
            mask={"+7 999 999-99-99"}
            placeholder="+7 999 999-99-99"
            {...register("phone", {
              required: "Поле обязательно к заполнению",
            })}
          />
          <div>
            {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
          </div>
        </label>
        <label>
          Zip code:
          <input {...register("zipcode", { required: false })} />
        </label>
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}
