import { Typography } from '@material-ui/core';
import { Card } from 'components/Card';

const StatusCard = () => (
  <Card title="Status" filled>
    <Typography variant="subtitle2">
      Estado actual de la aplicación del PAEDUCA en el departamento FCYS
    </Typography>
  </Card>
);

export default StatusCard;
