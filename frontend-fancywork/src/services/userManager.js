import { getUsers } from "../api/userService";

export async function fetchAndSortUsers() {
  const users = await getUsers();
  return users.sort((a, b) => a.name.localeCompare(b.name));
}
