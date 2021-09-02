import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { Card } from 'components/Card';

const InfoCard = () => {
  const { t } = useTranslation();
  return (
    <Card title={t('dashboard.card.main.title')} filled noMin>
      <Typography variant="subtitle2">
        {t('dashboard.card.main.body')}
      </Typography>
    </Card>
  );
};

export default InfoCard;
