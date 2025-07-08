import { useEffect, useState } from "react";

type Contact = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

function useGetContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<Error>();

  useEffect(() => {
    setIsLoading(true);

    const fetchContacts = async () => {
      try {
        await fetch("http://127.0.0.1:5000/contacts")
          .then((res) => res.json())
          .then((res) => setContacts(res.contacts));

        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setServerError(error);
          setIsLoading(false);
        }
      }
    };

    fetchContacts();
  }, []);

  return { contacts, isLoading, serverError };
}

export default useGetContacts;
