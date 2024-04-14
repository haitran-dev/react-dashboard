import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutProvider";
import ReactIcon from "../assets/react.svg";
import { orientations } from "../constants/orientations";
import { Tooltip } from "@mui/material";

const navItems = [
  {
    icon: <SpaceDashboardOutlinedIcon />,
    title: "Dashboard",
    active: true,
  },
  {
    icon: <AnalyticsOutlinedIcon />,
    title: "Statistics",
  },
  {
    icon: <ArticleOutlinedIcon />,
    title: "Documents",
  },
  {
    icon: <EmailOutlinedIcon />,
    title: "Mail",
  },
  {
    icon: <DevicesOutlinedIcon />,
    title: "Devices",
  },
];

const Navigation = () => {
  const { showMobileAsideState, orientationState } = useContext(LayoutContext);

  const isVerticalOrientation =
    orientationState.value === orientations.VERTICAL;

  return (
    <>
      <nav
        className={`${isVerticalOrientation ? "aside-nav" : "top-nav"} ${
          showMobileAsideState.value ? "show" : ""
        }`}
      >
        <div
          className={`nav-wrapper ${
            !isVerticalOrientation ? "horizontal" : ""
          }`}
        >
          <div className="nav-header">
            <img
              className="nav-header-logo"
              src={ReactIcon}
              alt="Dashboard Logo"
            />
            <span className="nav-header-text">React Dashboard</span>
          </div>
          <ul>
            {navItems.map((item) => (
              <Tooltip
                key={item.title}
                title={isVerticalOrientation ? "" : item.title}
              >
                <li className={item.active ? "active" : ""}>
                  {item.icon}
                  {isVerticalOrientation && <span>{item.title}</span>}
                </li>
              </Tooltip>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
