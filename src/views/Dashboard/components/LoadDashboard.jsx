import { Grid } from '@material-ui/core';
import { InfoCard, ProfileCard, ProgressCard, StatusCard } from './Cards';
import { dashboardType } from 'constants/types';
import PropTypes from 'prop-types';

const Dashboards = {
  [dashboardType[0].name]: (
    <>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <InfoCard />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <ProfileCard />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <StatusCard />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ProgressCard />
        </Grid>
      </Grid>
    </>
  ),
  [dashboardType[1].name]: (
    <>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <InfoCard />
        </Grid>
      </Grid>
    </>
  ),
  [dashboardType[2].name]: (
    <>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <InfoCard />
        </Grid>
      </Grid>
    </>
  ),
};

const LoadDashboard = (props) => {
  const { userDashboard } = props;
  return Dashboards[userDashboard];
};

LoadDashboard.propTypes = {
  userDashboard: PropTypes.string, // USER DASHBOARD TYPE
};

export default LoadDashboard;
