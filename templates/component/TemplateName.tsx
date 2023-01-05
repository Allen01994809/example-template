import React, { FC } from 'react';
import styles from './TemplateName.module.scss';
import { TemplateNameProps } from './interface';

const TemplateName: FC<TemplateNameProps> = () => (
  <div className={styles.wrap} data-testid="TemplateName">
    TemplateName Component
  </div>
);

export default TemplateName;
