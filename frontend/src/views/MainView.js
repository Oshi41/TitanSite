import React from 'react';
import {Button} from "@material-ui/core";

class Main extends React.Component{
    render() {
        return (
            <div style={{margin: '10px'}}>
                <Button href='/registerPage'
                        variant='contained'
                        color="primary">Регистрация</Button>
            </div>
        );
    }
}

export default Main;