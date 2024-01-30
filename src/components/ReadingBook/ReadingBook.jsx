import { useSelector } from 'react-redux';
import {
  BookAuthor,
  BookBox,
  BookIMG,
  BookTitle,
  ReadBox,
  SVGWrapper,
  Title,
} from './ReadingBook.styled';
import { selectReadingBook } from '../../redux/books/booksSelectors';
import { useState } from 'react';
import sprite from '../../assets/images/sprite.svg';

const ReadingBook = ({ StatsToogle }) => {
  const [isReading, setIsReading] = useState(false);
  const book = useSelector(selectReadingBook);


  return (
    <ReadBox>
      <Title>My reading</Title>
      {book && (
        <BookBox>
          <BookIMG src={book.imageUrl} alt="book cover" />
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
          {isReading ? (
            <SVGWrapper onClick={() => { setIsReading(false), StatsToogle()}}>
              <use href={`${sprite}#icon-videoStop`}></use>
            </SVGWrapper>
          ) : (
            <SVGWrapper
              onClick={() => {
                setIsReading(true), StatsToogle();
              }}
            >
              <use href={`${sprite}#icon-videoStart`}></use>
            </SVGWrapper>
          )}
        </BookBox>
      )}
    </ReadBox>
  );
};

export default ReadingBook;
