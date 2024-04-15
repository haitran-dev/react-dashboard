import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Tooltip } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";
import { useContext } from "react";
import { orientations } from "../constants/orientations";
import { LayoutContext } from "../contexts/LayoutProvider";
import OrdersTable from "./OrdersTable";
import WidgetBox from "./WidgetBox";

const Content = () => {
  const { showMobileAsideState, orientationState } = useContext(LayoutContext);

  const isVerticalMode = orientationState.value === orientations.VERTICAL;

  return (
    <div className={`main-content ${!isVerticalMode ? "horizontal" : ""}`}>
      {isVerticalMode && (
        <div className="content-top">
          <Tooltip title="Open menu" className="menu-toggle">
            <IconButton onClick={showMobileAsideState.toggle}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
      <div className="content-area">
        <WidgetBox classNames="small" title="Orders by quarter">
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
            ]}
            height={300}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </WidgetBox>
        <WidgetBox classNames="small" title="Orders by quarter">
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
            ]}
            height={300}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </WidgetBox>

        <WidgetBox classNames="small" title="Orders by quarter">
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
            ]}
            height={300}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </WidgetBox>
        <WidgetBox classNames="medium" title="Compare platform orders">
          <LineChart
            height={300}
            series={[
              {
                data: [14, 13, 16, 12, 12, 12, 15],
                label: "Facebook",
                area: true,
                stack: "total",
                showMark: false,
              },
              {
                data: [14, 11, 8, 12, 9, 14, 19],
                label: "Twitter",
                area: true,
                stack: "total",
                showMark: false,
              },
              {
                data: [12, 13, 12, 20, 11, 12, 15],
                label: "Amazon",
                area: true,
                stack: "total",
                showMark: false,
              },
            ]}
            xAxis={[
              {
                scaleType: "point",
                data: ["Jan", "Feb", "March", "April", "May", "June", "July"],
              },
            ]}
            sx={{
              ".MuiLineElement-root": {
                display: "none",
              },
            }}
          />
        </WidgetBox>
        <WidgetBox classNames="medium" title="Orders by months">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5, 6],
              },
            ]}
            height={300}
          />
        </WidgetBox>
        <WidgetBox classNames="large" title="Current orders">
          <OrdersTable />
        </WidgetBox>
        <WidgetBox classNames="medium" title="Compare platform orders">
          <LineChart
            height={300}
            series={[
              {
                data: [14, 13, 16, 12, 12, 12, 15],
                label: "Facebook",
                area: true,
                stack: "total",
                showMark: false,
              },
              {
                data: [14, 11, 8, 12, 9, 14, 19],
                label: "Twitter",
                area: true,
                stack: "total",
                showMark: false,
              },
              {
                data: [12, 13, 12, 20, 11, 12, 15],
                label: "Amazon",
                area: true,
                stack: "total",
                showMark: false,
              },
            ]}
            xAxis={[
              {
                scaleType: "point",
                data: ["Jan", "Feb", "March", "April", "May", "June", "July"],
              },
            ]}
            sx={{
              ".MuiLineElement-root": {
                display: "none",
              },
            }}
          />
        </WidgetBox>
        <WidgetBox classNames="medium" title="Orders by months">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5, 6],
              },
            ]}
            height={300}
          />
        </WidgetBox>
      </div>
    </div>
  );
};

export default Content;
