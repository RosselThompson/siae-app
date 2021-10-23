import { Grid } from '@material-ui/core';
import { InfoCard, ProfileCard, ProgressCard } from './Cards';
import { StatusAVDCard } from './Cards/ProfessorCards';
import { DASHBOARD_TYPE } from 'constants/types';
import PropTypes from 'prop-types';

const Dashboards = {
  [DASHBOARD_TYPE[0].name]: (
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
          <StatusAVDCard isCompleted />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ProgressCard percent={50} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <StatusAVDCard />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ProgressCard percent={30} />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ProgressCard percent={80} />
        </Grid>
      </Grid>
    </>
  ),
  [DASHBOARD_TYPE[1].name]: (
    <>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <InfoCard />
        </Grid>
      </Grid>
    </>
  ),
  [DASHBOARD_TYPE[2].name]: (
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
