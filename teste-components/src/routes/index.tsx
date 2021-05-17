import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/Home-page';
import { RegisterPage } from '../pages/Register-page';

export const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cadastrar" component={RegisterPage} />
        <Route path="/editar/:id" component={RegisterPage} />
    </Switch>
)