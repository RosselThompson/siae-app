import Layout from 'layout/Layout';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Dashboard, Roles, Users, ManageTools } from 'views';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/roles" component={Roles} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/aac" component={ManageTools} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default Router;
