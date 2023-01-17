import {
  CampaignOutlined,
  FmdGoodOutlined,
  LogoutOutlined,
  Menu,
} from "@mui/icons-material"
import React from "react"
import "./Navbar.css"
const Navbar = ({ onOpen }) => {
  return (
    <>
      <div className="navContainer">
        <div className="navLeft">
          <Menu className="navLeftItem menuicon me-4" onClick={onOpen} />
          <div className="navLeftItem mb-2">
            <img
              src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png"
              alt=""
              className="logo"
            />
          </div>
        </div>
        <div className="navRight">
          <div className="navItemContainer ms-2">
            <CampaignOutlined className="navRightItem" />
            <span className="navRightItem text-primary">Post Ad</span>
          </div>
          <div className="navItemContainer ms-2">
            <FmdGoodOutlined className="navRightItem" />
            <span className="navRightItem text-primary">Near Me</span>
          </div>
          <div className="navItemContainer ms-2">
            <LogoutOutlined className="navRightItem" />
            <span className="navRightItem text-primary">Login/Sign UP</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
