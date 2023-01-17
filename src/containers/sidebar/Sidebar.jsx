import {
  BrushOutlined,
  CampaignOutlined,
  LogoutOutlined,
  NotificationsNoneOutlined,
  PersonOutlined,
  PlaceOutlined,
  SellOutlined,
} from "@mui/icons-material"
import React from "react"
import "./Sidebar.css"
const Sidebar = ({ onClose }) => {
  return (
    <>
      <div className="sideBarFull">
        <div className="sideBarContainer">
          <div className="navLeftItem  mb-2">
            <img
              src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png"
              alt=""
              className="logoSide"
            />
          </div>
          <div className="sideList">
            <div className="sideListItem">
              <div className="sideMenuIcon">
                <NotificationsNoneOutlined />
              </div>
              <div className="sideMenuText  ms-4">Post Requirements</div>
            </div>
            <div className="sideListItem">
              <div className="sideMenuIcon">
                <CampaignOutlined />
              </div>
              <div className="sideMenuText  ms-4">Post Ad</div>
            </div>
            <div className="sideListItem">
              <div className="sideMenuIcon">
                <BrushOutlined />
              </div>
              <div className="sideMenuText  ms-4">Post Service</div>
            </div>
            <div className="sideListItem">
              <div className="sideMenuIcon">
                <PersonOutlined />
              </div>
              <div className="sideMenuText  ms-4">Profile</div>
            </div>
            <div className="sideListItem">
              <div className="sideMenuIcon">
                <NotificationsNoneOutlined />
              </div>
              <div className="sideMenuText  ms-4">Notification</div>
            </div>
            <div className="sideListItem">
              <div className="sideMenuIcon">
                <PlaceOutlined />
              </div>
              <div className="sideMenuText  ms-4">Near Me</div>
            </div>
            <div className="sideListItem">
              <div className="sideMenuIcon">
                <SellOutlined />
              </div>
              <div className="sideMenuText  ms-4">Pricing</div>
            </div>
            <hr />
            <div className="sideListItem">
              <div className="sideMenuIcon">
                <LogoutOutlined />
              </div>
              <div className="sideMenuText  ms-4">Login/Sign Up</div>
            </div>
            <div className="footer">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="sideBarOverlay" onClick={onClose}></div>
      </div>
    </>
  )
}

export default Sidebar
