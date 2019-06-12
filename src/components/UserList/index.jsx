import React, {Fragment} from 'react';
import { Link, Route } from 'react-router-dom';
import mail from '../../assets/img/mail.png';
import tel from '../../assets/img/phone.png';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'users'}>
        <h3 className="users__title">Список пользователей</h3>
        <ul className="users__list">
          {this.props.isLoading && <span>Загрузка...</span>}
          {
            this.props.list.map((user, i) => {
              return (
                <li key={i} className="users__item">
                  <div className={"users__wrap"}>
                    <p className="users__name">{user.name}</p>
                    <div className="users__about">
                      Контакты:
                      <span className="users__mail">
                        <img src={mail}  className="users__mail-img"/>
                        {user.email}</span>
                      <span className="users__phone">
                        <img src={tel}  className="users__phone-img"/>
                        {user.phone}</span>
                    </div>
                  </div>
                  <Link to={'/users/' + user.id} className = 'users__user'>
                    Перейти в профиль
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <Route
          path={'/users'}
          exact
          render={() => <Link to={'/'} className = "users__list-main">На главную</Link>}
        />
      </div>
    )
  }
}