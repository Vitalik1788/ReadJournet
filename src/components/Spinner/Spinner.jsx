import { DNA } from 'react-loader-spinner';
import { StyledSpinner } from './Spinner.styled';

const Spinner = () => {
  return (
    <StyledSpinner>
      <DNA
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </StyledSpinner>
  );
};

export default Spinner;
