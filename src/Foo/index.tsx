import React, { type FC } from 'react';
import styles from './index.module.less';

const Foo: FC<{ title: string }> = (props) => (
  <h4 className={styles.text}>{props.title}</h4>
);

export default Foo;
