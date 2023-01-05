import React, { FC } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  /**
   * 活性状態を表す | true: 操作不可能 | false: 操作可能
   */
  disabled?: boolean;
}

const Button: FC<ButtonProps> = () => (
  <div className={styles.Button} data-testid="Button">
    Button Component
  </div>
);

export default Button;
