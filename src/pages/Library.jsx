import LibraryDashboard from "../components/LibraryDashboard/LibraryDashboard";
import MyLibraryBooks from "../components/MyLibraryBooks/MyLibraryBooks";
import { PageBox } from "./Library.styled";


const Library = () => {

  return (
    <PageBox>
      <LibraryDashboard />
      <MyLibraryBooks />
    </PageBox>)

}

export default Library;