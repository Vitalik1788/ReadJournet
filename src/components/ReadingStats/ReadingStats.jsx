import sprite from '../../assets/images/sprite.svg';
import {
  InfoBox,
  LittleGreenBox,
  ProcentRead,
  ProcentageBox,
  ReadPage,
  SVGCirclePart,
  SVGSandClock,
  Title,
  Wrapper,
} from './ReadingStats.styled';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ReadingStats = ({book}) => {
  const lastRead = book?.progress.slice(-1);
  const userProgress = (lastRead[0].finishPage / book.totalPages) * 100;
  const totalPageRead = lastRead[0].finishPage;
  const value = userProgress.toFixed(2);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <Title>Statistics</Title>
        <div>
          <SVGSandClock>
            <use href={`${sprite}#icon-sendClock`}></use>
          </SVGSandClock>
          <SVGCirclePart>
            <use href={`${sprite}#icon-circlePart`}></use>
          </SVGCirclePart>
        </div>
      </div>
      <Wrapper>
        <ProcentageBox>
          <CircularProgressbar
            value={isNaN(value) ? 0 : value}
            text={isNaN(value) ? '0%' : `${value}%`}
            styles={{
              text: {
                fontFamily: 'Gilroy',
                fontSize: '18px',
                fontWeight: '700',
                fill: '#F9F9F9',
              },
              trail: {
                stroke: '#1F1F1F',
              },
              path: {
                stroke: '#30B94D',
              },
            }}
          />
        </ProcentageBox>
        <InfoBox>
          <LittleGreenBox></LittleGreenBox>
          <ul>
            <ProcentRead>{isNaN(value) ? 0 : value}%</ProcentRead>
            <ReadPage>{totalPageRead ? totalPageRead : 0} pages read</ReadPage>
          </ul>
        </InfoBox>
      </Wrapper>
    </>
  );
};

export default ReadingStats;
