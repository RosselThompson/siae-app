import { useTranslation } from 'react-i18next';
import { VictoryPie, VictoryLabel } from 'victory';
import { Card } from 'components/Card';
import { Box, Typography, useTheme, Grow } from '@material-ui/core';
import PropTypes from 'prop-types';

const ProgressCard = (props) => {
  const { percent } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Card title="Progreso">
      <div style={{ height: '11.25rem', marginTop: '-1rem' }}>
        <Grow in timeout={1000}>
          <svg viewBox="0 0 400 400" width="100%" height="100%">
            <VictoryPie
              standalone={false}
              colorScale={[theme.palette.success.main, 'transparent']}
              width={400}
              height={400}
              data={[
                { x: 1, y: percent },
                { x: 2, y: 100 - percent },
              ]}
              innerRadius={120}
              cornerRadius={25}
              labels={() => null}
            />
            <VictoryLabel
              textAnchor="middle"
              verticalAnchor="middle"
              x={200}
              y={200}
              text={`${percent}%`}
              style={{
                fontSize: 45,
                fontFamily: theme.typography.fontFamily,
              }}
            />
          </svg>
        </Grow>
      </div>
      <Box marginTop="0.5rem" textAlign="center">
        <Typography variant="caption" color="textSecondary">
          {t('dashboard.progress.card.info')}
        </Typography>
      </Box>
    </Card>
  );
};

ProgressCard.propTypes = {
  percent: PropTypes.number, // PERCENT TO SHOW
};

export default ProgressCard;
