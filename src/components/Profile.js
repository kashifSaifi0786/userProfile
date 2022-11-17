import {
  EditOutlined,
  DeleteFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HomeOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const Profile = ({
  name,
  username,
  email,
  id,
  phone,
  website,
  address,
  company,
}) => (
  <Card
    style={{
      margin: 15,
    }}
    cover={
      <img
        alt="example"
        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options'[mood][]=happy`}
      />
    }
    actions={[
      <HeartOutlined key="hear" style={{ color: "red" }} />,
      <EditOutlined key="edit" />,
      <DeleteFilled key="delete" />,
    ]}
  >
    <Meta
      title={name}
      description={
        <div>
          <div>
            <MailOutlined style={{ marginRight: "10px" }} />
            <span>{email}</span>
          </div>
          <div>
            <PhoneOutlined style={{ marginRight: "10px" }} />
            <span>{phone}</span>
          </div>
          <div>
            <GlobalOutlined style={{ marginRight: "10px" }} />
            <span>{website}</span>
          </div>
          <div>
            <HomeOutlined style={{ marginRight: "10px" }} />
            <span>{address.suite}, </span>
            <span>{address.street}, </span>
            <span>{address.city}</span>
          </div>
          <div>
            <ShopOutlined style={{ marginRight: "10px" }} />
            <span>{company.name}</span>
            <span>({company.bs})</span>
          </div>
        </div>
      }
    />
  </Card>
);
export default Profile;
