import Filter from "../components/Filter/Filter";
import RecommendedBooks from "../components/RecommendedBooks/RecommendedBooks";
import { PageBox } from "./RecommendedPage.styled";


const RecommendedPage = () => {

  return (
    <PageBox>
      <Filter />
      <RecommendedBooks />
    </PageBox>)
}

export default RecommendedPage;