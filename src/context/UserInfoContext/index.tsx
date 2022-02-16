import { createContext, useMemo, useState } from "react";
import { UserInfoProps, UserContextProps } from "../../types";

const UserInfoContext = createContext<UserContextProps | undefined>(undefined);

const UserInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    deliveryMethod: "pickup",
    pickAddress:
      "120 Nguyen Thai Hoc Street, Pham Ngu Lao Ward, Hoang Mai district, Ha Noi",
    shipProvince: "Ha Noi",
    paymentMethod: "online",
  });

  const userContext: UserContextProps = useMemo(
    () => ({ userInfo, setUserInfo }),
    [userInfo]
  );

  return (
    <UserInfoContext.Provider value={userContext}>
      {children}
    </UserInfoContext.Provider>
  );
};

export { UserInfoContext, UserInfoProvider };
