import React, { useEffect, useState } from "react";
import { orientations } from "../constants/orientations";
import { IconButton, Tooltip } from "@mui/material";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";

export const LayoutContext = React.createContext({
  orientationState: {
    value: orientations.VERTICAL,
    toggle: () => {},
  },
  showMobileAsideState: {
    value: false,
    toggle: () => {},
  },
});

type LayoutProviderProps = {
  children: React.ReactNode;
};

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [orientation, setOrientation] = useState(orientations.VERTICAL);
  const [showMobileAside, setMobileAside] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOrientation(orientations.VERTICAL);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOrientation = () =>
    setOrientation((prev) =>
      prev === orientations.HORIZONTAL
        ? orientations.VERTICAL
        : orientations.HORIZONTAL
    );

  const toggleShowMobileAside = () => setMobileAside((prev) => !prev);

  return (
    <LayoutContext.Provider
      value={{
        orientationState: { value: orientation, toggle: toggleOrientation },
        showMobileAsideState: {
          value: showMobileAside,
          toggle: toggleShowMobileAside,
        },
      }}
    >
      {children}
      <div className="rotate-toggle">
        <Tooltip title="Rotate">
          <IconButton onClick={toggleOrientation}>
            <ScreenRotationIcon />
          </IconButton>
        </Tooltip>
      </div>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
