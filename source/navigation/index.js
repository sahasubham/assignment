import { useAuthentication } from "../hook/useAuthentication";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}
