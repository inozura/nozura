import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ContentText({ children, className }: Props) {
  return (
    <p
      className={classNames(
        "text-center text-gray-700 leading-extra-loose py-2",
        className
      )}
    >
      {children}
    </p>
  );
}
