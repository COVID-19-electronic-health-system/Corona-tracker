import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HealthLogButton() {
  const { t } = useTranslation();

  return (
    <Link to="/symptomsurvey">
      <Button color="secondary" variant="contained">
        {t('surveyButtonText')}
      </Button>
    </Link>
  );
}
export default function MyHealthLog() {
  return <HealthLogButton />;
}
