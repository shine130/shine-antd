import React from 'react';
import { Typography } from 'antd';
import styles from './index.css';

const { Title, Paragraph, Text } = Typography;

export default function() {
  return (
    <div className={styles.normal}>
      <Typography>
      <Title level={3}>hello ~</Title>
      <Paragraph>This is an <Text mark>Ant Design</Text> project.</Paragraph>
      </Typography>
    </div>
  );
}
