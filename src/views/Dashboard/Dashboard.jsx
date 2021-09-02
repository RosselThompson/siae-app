import { Grid } from '@material-ui/core';
import { InfoCard, ProfileCard, ProgressCard, StatusCard } from './components';

const Dashboard = () => (
  <>
    <Grid container>
      <Grid item>
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
);

export default Dashboard;
