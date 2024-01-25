import { ProgText, ProgressTitle, StarBox, ProgressBox, StarIMGMobile, StarIMGTablet } from "./ReadProgressDefault.styled";
import star from "../../assets/images/progress_star.png";
import starTablet from "../../assets/images/tablet_star.png";


const ProgressDefault = () => {

  return (
    <ProgressBox>
      <ProgressTitle>Progress</ProgressTitle>
      <ProgText>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </ProgText>
      <StarBox>
        <StarIMGMobile src={star} alt="star" />
        <StarIMGTablet src={starTablet} alt="star" />
      </StarBox>
    </ProgressBox>
  );
};

export default ProgressDefault;