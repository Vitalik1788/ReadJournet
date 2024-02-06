import { useState } from 'react';
import ReadingBook from '../components/ReadingBook/ReadingBook';
import ReadingFilter from '../components/ReadingFilter/ReadingFilter';
import { PageBox } from './MyReading.styled';

const MyReading = () => {
  const [isReading, setIsReading] = useState(false);

  function StatsToogle() {
    if (isReading === false) {
      setIsReading(true);
    } else if (isReading === true) {
      setIsReading(false);
    } 
  }

  return (
    <>
      <PageBox>
        <ReadingFilter StatsToogle={StatsToogle} isReading={isReading} />
        <ReadingBook isReading={isReading} />
      </PageBox>
    </>
  );
};

export default MyReading;
