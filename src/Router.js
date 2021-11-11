import Layout from 'layout/Layout';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import {
  Dashboard,
  Roles,
  Users,
  Aspect,
  ManageTools,
  Schedule,
  ScheduleAAC,
  ScheduleVED,
  ApplyAACTool,
  ApplyAAC,
  ApplyAVD,
  ApplyVED,
  NotFound,
} from 'views';

/* eslint react/prop-types: 0 */
const MyRoute = ({ l, component, ...rest }) => {
  // eslint-disable-next-line react/display-name
  const renderFn = (Main, Component) => (props) => {
    if (Main)
      return (
        <Main>
          <Component {...props} />
        </Main>
      );
    else return <Component />;
  };
  return <Route {...rest} render={renderFn(l, component)} />;
};

const Router = () => (
  <BrowserRouter>
    <Switch>
      <MyRoute l={Layout} exact path="/" component={Dashboard} />
      <MyRoute l={Layout} exact path="/roles" component={Roles} />
      <MyRoute l={Layout} exact path="/users" component={Users} />
      <MyRoute l={Layout} exact path="/aspect" component={Aspect} />
      <MyRoute l={Layout} exact path="/aac" component={ManageTools} />
      <MyRoute l={Layout} exact path="/ved" component={ManageTools} />
      <MyRoute l={Layout} exact path="/avd" component={ManageTools} />
      <MyRoute l={Layout} exact path="/schedule" component={Schedule} />
      <MyRoute l={Layout} exact path="/scheduleaac" component={ScheduleAAC} />
      <MyRoute l={Layout} exact path="/scheduleved" component={ScheduleVED} />
      <MyRoute l={Layout} exact path="/applyaac" component={ApplyAAC} />
      <MyRoute path="/applyaac/:id" component={ApplyAACTool} />
      <MyRoute exact path="/applyavd" component={ApplyAVD} />
      <MyRoute exact path="/applyved" component={ApplyVED} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
