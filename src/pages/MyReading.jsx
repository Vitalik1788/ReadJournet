import { useState } from 'react';
import ReadingBook from '../components/ReadingBook/ReadingBook';
import ReadingFilter from '../components/ReadingFilter/ReadingFilter';
import Spinner from '../components/Spinner/Spinner';
import { PageBox } from './MyReading.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/books/booksSelectors';

const MyReading = () => {
  const isLoading = useSelector(selectIsLoading);
  const [isReading, setIsReading] = useState(false);

  function StatsToogle() {
    if (isReading === false) {
      setIsReading(true);
    } else if (isReading === true) {
      setIsReading(false);
    } 
  }

  return (
    isLoading ? (<div><Spinner /></div>) : (<PageBox>
        <ReadingFilter StatsToogle={StatsToogle} isReading={isReading} />
        <ReadingBook isReading={isReading} />
      </PageBox>)    
  );
};

export default MyReading;
