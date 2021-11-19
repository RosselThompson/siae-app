import { Grid } from '@material-ui/core';
import { InfoCard, ProfileCard, ProgressCard, ShowResultsCard } from './Cards';
import {
  StatusAVDCard,
  StatusAACCard,
  StatusVEDCard,
} from './Cards/ProfessorCards';
import {
  StatusAACCard as DepStatusAACCard,
  StatusAVDCard as DepStatusAVDCard,
  StatusVEDCard as DepStatusVEDCard,
} from './Cards/DepartmentChiefCards';
import { DASHBOARD_TYPE } from 'constants/types';
import PropTypes from 'prop-types';

const Dashboards = {
  //PROFESSOR
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
          <ProgressCard percent={50} />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ShowResultsCard isAvailable />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <StatusAACCard isCompleted />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <StatusAVDCard />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <StatusVEDCard />
        </Grid>
      </Grid>
    </>
  ),
  // DEPARTMENT CHIEF
  [DASHBOARD_TYPE[1].name]: (
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
          <ProgressCard percent={30} />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ShowResultsCard isAvailable />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <DepStatusAACCard />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <DepStatusAVDCard />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <DepStatusVEDCard />
        </Grid>
      </Grid>
    </>
  ),
  //DEAN
  [DASHBOARD_TYPE[2].name]: (
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
          <ProgressCard percent={30} />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ShowResultsCard isAvailable />
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
