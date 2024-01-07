import { Box, Icon, MenuBox, TitleBox, TitleFilter, TitleLibrary } from "./MyLibraryBooks.styled";



const MyLibraryBooks = () => {

  return (
    <Box>
      <TitleBox>
        <TitleLibrary>My library</TitleLibrary>
        <MenuBox>
          <TitleFilter>All books</TitleFilter>
          <Icon />
        </MenuBox>
      </TitleBox>
    </Box>
  );
}

export default MyLibraryBooks;