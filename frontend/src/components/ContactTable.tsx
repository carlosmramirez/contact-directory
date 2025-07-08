import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Table,
  Text,
} from "@radix-ui/themes";
import { FaPlus } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import copyText from "../copyText";

type Contact = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

interface Props {
  contacts: Contact[];
}

function ContactTable(props: Props) {
  const columnHeaders = [
    {
      label: copyText.contactDirectoryColumnLabel_firstName,
      value: "firstName",
    },
    { label: copyText.contactDirectoryColumnLabel_lastName, value: "lastName" },
    { label: copyText.contactDirectoryColumnLabel_email, value: "email" },
  ];

  return (
    <Box>
      <Flex justify="between" mb="4">
        <Heading>{copyText.contactDirectoryTableTitle}</Heading>
        <Button>
          <Flex align="center">
            <FaPlus />
            <Text ml="2">{copyText.addContactButtonLabel}</Text>
          </Flex>
        </Button>
      </Flex>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columnHeaders.map((header) => (
              <Table.ColumnHeaderCell key={header.value}>
                {header.label}
              </Table.ColumnHeaderCell>
            ))}
            <Table.ColumnHeaderCell key="action-menu" />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.contacts.map((contact) => (
            <Table.Row key={contact.id}>
              <Table.Cell>{contact.firstName}</Table.Cell>
              <Table.Cell>{contact.lastName}</Table.Cell>
              <Table.Cell>{contact.email}</Table.Cell>
              <Table.Cell>
                <IconButton size="1">
                  <FaEllipsis />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

export default ContactTable;
