import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutProvider";
import { orientations } from "../constants/orientations";

const Content = () => {
  const { showMobileAsideState, orientationState } = useContext(LayoutContext);

  return (
    <div className="main-content">
      <div className="content-top">
        {orientationState.value === orientations.VERTICAL && (
          <Tooltip title="Open menu" className="menu-toggle">
            <IconButton onClick={showMobileAsideState.toggle}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <div className="content-area"></div>
    </div>
  );
};

export default Content;
