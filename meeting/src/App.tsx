import { useState } from 'react';
import { TopContainer } from "./container/TopContainer";
import { LeftContainer } from "./container/LeftContainer";
import { RightContainer } from "./container/RightContainer";
import { enContentView } from './enum/ContentViewEnum';

import styles from "./css/container/app.module.css"

function App() {
  const [contentType, setContentType] = useState<enContentView>(enContentView.NONE);
  return (
    <div className={styles.container}>
      <TopContainer></TopContainer>
      <div className={styles.bottomContainer}>
        <LeftContainer className={styles.bottomLeftContainer} callback={setContentType}></LeftContainer>
        <RightContainer className={styles.bottomRightContainer} type={contentType}></RightContainer>
      </div>
    </div>
  );
}

export default App;
