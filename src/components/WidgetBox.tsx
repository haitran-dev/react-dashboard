import React from "react";
import "../styles/widget.scss";

const WidgetBox = ({
  children,
  title,
  classNames,
}: {
  children: React.ReactNode;
  title: string;
  classNames?: string;
}) => {
  return (
    <div className={`widget-box ${classNames}`}>
      <p className="widget-header">{title}</p>
      {children}
    </div>
  );
};

export default WidgetBox;
