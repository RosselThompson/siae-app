import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@material-ui/core';
import { Person, Mail, Category } from '@material-ui/icons';
import { Card } from 'components/Card';

const ProfileCard = () => {
  const { t } = useTranslation();
  return (
    <Card title={t('dashboard.card.profile.title')}>
      <Box display="flex" alignItems="center" marginBottom="0.5rem">
        <Box marginRight="0.5rem">
          <Person />
        </Box>
        <Typography variant="caption" color="textSecondary">
          Rossel Thompson
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="0.5rem">
        <Box marginRight="0.5rem">
          <Mail />
        </Box>
        <Typography variant="caption" color="textSecondary">
          rossel96t@gmail.com
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="0.5rem">
        <Box marginRight="0.5rem">
          <Category />
        </Box>
        <Typography variant="caption" color="textSecondary">
          Jefe de Departamento
        </Typography>
      </Box>
    </Card>
  );
};

export default ProfileCard;
