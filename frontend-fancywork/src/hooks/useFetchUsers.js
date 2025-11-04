import { useEffect, useState } from "react";
import { fetchAndSortUsers } from "../services/userManager";

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAndSortUsers().then((res) => {
      setUsers(res);
      setLoading(false);
    });
  }, []);

  return { users, loading };
}
