import { useContext } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { CaretDownFilled } from "@ant-design/icons";
import "antd/lib/select/style/css";
import { UserInfoContext } from "../../../../context/UserInfoContext";

const { Option } = Select;

export const CourierNote = () => {
  const userContext = useContext(UserInfoContext);
  if (!userContext) return <></>;
  const { userInfo, setUserInfo } = userContext;

  const handleChange = ({ value }: any) => {
    setUserInfo((prev) => ({ ...prev, shipProvince: value }));
  };

  return (
    <Container>
      <div className="checkout-form-title">Delivery address</div>
      <div className="courier-input-container">
        <Select
          labelInValue
          onChange={handleChange}
          defaultValue={{ value: userInfo.shipProvince }}
          bordered={false}
          suffixIcon={<CaretDownFilled />}
        >
          <Option value="Ha Noi">Ha Noi</Option>
          <Option value="Ho Chi Minh city">Ho Chi Minh city</Option>
        </Select>
        <input
          type="text"
          className="checkout-form-input"
          placeholder="Address..."
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, shipAddress: e.target.value }))
          }
        />
      </div>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 2rem;
  .courier-input-container {
    display: flex;
    gap: 20px;
    .checkout-form-input {
      flex: 1;
    }
  }
`;
