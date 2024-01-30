import styled from '@emotion/styled';

export const Title = styled.h2`
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const SVGSandClock = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #686868;

  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const SVGCirclePart = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #f9f9f9;
`;

export const Wrapper = styled.div`  
  padding-top: 20px;
  background-color: #262626;
  min-height: 211px;
  border-radius: 12px;
`;

export const ProcentageBox = styled.div`
  width: 116px;
  height: 116px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 15px;
  max-width: 95px;
  margin-left: auto;
  margin-right: auto;
`

export const LittleGreenBox = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  background-color: #30B94D;
`;

export const ProcentRead = styled.li`
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  margin-bottom: 5px;
`;

export const ReadPage = styled.li`
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #686868;
`;
