import Layout from 'layout/Layout';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Dashboard, Roles, Users, Aspect, ManageTools, Schedule } from 'views';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/roles" component={Roles} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/aspect" component={Aspect} />
        <Route exact path="/aac" component={ManageTools} />
        <Route exact path="/ved" component={ManageTools} />
        <Route exact path="/avd" component={ManageTools} />
        <Route exact path="/schedule" component={Schedule} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default Router;
