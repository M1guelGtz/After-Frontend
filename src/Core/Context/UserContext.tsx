import { createContext } from "react";
import type { ProviderDTO } from "../../Features/Users/Data/Models/ProviderDTO";

export interface IUserContext {
  user: ProviderDTO | null;
  setUser: React.Dispatch<React.SetStateAction<ProviderDTO | null>>;
}

const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {}
});

export default UserContext;