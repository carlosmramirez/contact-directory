import { Box, Flex } from "@radix-ui/themes";
import "./App.css";
import ContactTable from "./components/ContactTable";
import useGetContacts from "./hooks/useGetContacts";

function App() {
  const {
    contacts,
    isLoading: isLoadingContacts,
    serverError: errorContacts,
  } = useGetContacts();

  return (
    <Box width="100%">
      <Flex align="center" width="100%">
        <ContactTable contacts={contacts} />
      </Flex>
    </Box>
  );
}

export default App;
