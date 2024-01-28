import ReadingBook from '../components/ReadingBook/ReadingBook';
import ReadingFilter from '../components/ReadingFilter/ReadingFilter';
import { PageBox } from './MyReading.styled';

const MyReading = () => {
  return (
    <>
      <PageBox>
        <ReadingFilter />
        <ReadingBook />
      </PageBox>
    </>    
  );
};

export default MyReading;
