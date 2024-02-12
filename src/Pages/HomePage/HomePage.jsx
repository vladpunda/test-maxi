import HeaderTitle from "../../Components/UsersList/HeaderTitle/HeaderTitle";

export default function HomePage() {
  return (
    <div>
      <HeaderTitle title={"Тестовое задание"} />
      <div style={{ margin: "20px" }}>
        <h3>Тестовое задание:</h3>
        <p>
          Необходимо разработать приложение для управления списком
          пользователей.
        </p>
        <h3>Логика работы:</h3>
        <p>
          При открытии приложения отображается список пользователей. У каждого
          пользователя, есть следующие данные:{" "}
        </p>
        <ul>
          <li>id, </li>
          <li>заглушка фотографии (круг с первой буквой name)</li>
          <li>name, </li>
          <li>username, </li>
          <li>email, </li>
          <li>phone </li>
          <li>zipcode</li>
        </ul>
        <ol style={{ paddingLeft: "20px" }}>
          <li>Добавить сортировку по полям: id, name, zipcode</li>
          <li>Добавить фильтрацию по полям: name, email, phone</li>
          <li>Добавить выбор одного или несколько элементов списка</li>
          <li>
            Добавить логику удаления выбранных элементов - при удалении
            открывается окно с подтверждением действия
          </li>
          <li>
            Реализовать возможность добавления нового пользователя - в модальном
            окне
          </li>
        </ol>
      </div>
    </div>
  );
}
