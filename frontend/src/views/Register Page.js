import React from 'react';
import api from '../api/1.0/base';
import {TextField, FormGroup, Button} from '@material-ui/core';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Page extends React.Component {
    state = {
        login: '',
        pass: '',
        repeat: '',

        loginIsTaken: false,
    };

    onRegister = (login, pass) => {
        api('reg', JSON.stringify({login, pass}))
            .then(value => {
                switch (value.status) {
                    case 200:
                        NotificationManager.success('Успешная регистрация', 'Регистрация', 5000);
                        return;

                    case 401:
                        NotificationManager.error('Логин уже занят', 'Ошибка', 5000);
                        return;

                    default:
                        NotificationManager.error('Ошибка при отправке', 'Ошибка', 5000);
                        return;
                }
            })
            .catch(reason => {
                NotificationManager.error('Ошибка на сервере', 'Ошибка', 5000);
            });
    };

    render() {
        const {login, pass, repeat, serverResponse} = this.state;
        const repeatError = pass && repeat !== pass;
        const canSubmit = login && pass && repeat && !repeatError;

        const repeatLabel = repeatError
            ? 'Пароли не совпадают'
            : 'Повторите пароль';

        return (
            <div style={{margin: '10px'}}>
                <h1>Регистрация</h1>
                <FormGroup component="fieldset">
                    <TextField label='Введите логин'
                               margin='dense'
                               value={login}
                               autoFocus
                               onChange={e => this.setState({login: e.target.value})}/>

                    <TextField label='Введите пароль'
                               margin='dense'
                               type='password'
                               value={pass}
                               onChange={e => this.setState({pass: e.target.value})}/>

                    <TextField label={repeatLabel}
                               margin='dense'
                               error={repeatError}
                               type='password'
                               value={repeat}
                               onChange={e => this.setState({repeat: e.target.value})}/>

                    {serverResponse && serverResponse}

                    <Button buttonRef={button => button && (button.onclick = () => this.onRegister(login, pass))}
                            variant="contained"
                            disabled={!canSubmit}>
                        Зарегистрироваться
                    </Button>
                </FormGroup>

                <NotificationContainer/>
            </div>
        );
    };
}

export default Page;