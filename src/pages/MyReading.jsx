import { useState } from 'react';
import ReadingBook from '../components/ReadingBook/ReadingBook';
import ReadingFilter from '../components/ReadingFilter/ReadingFilter';
import { PageBox } from './MyReading.styled';

const MyReading = () => {
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  function StatsToogle() {
    if (isStatsOpen === false) {
      setIsStatsOpen(true);    
    } else if (isStatsOpen === true) {
      setIsStatsOpen(false);
    } 
  }

  return (
    <>
      <PageBox>
        <ReadingFilter isStatsOpen={isStatsOpen} />
        <ReadingBook StatsToogle={StatsToogle} />
      </PageBox>
    </>
  );
};

export default MyReading;
