import React from 'react'
import { lazy, Suspense } from "react";
type IconProps = {
  name: string;
  w?: string;
  h?: string;
  c?: string;
  cls?: string;
  m?: string;
  [key: string]: any; 
};

const icons: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  Instagram: lazy(() => import("../icons/Instagram")),
  LinkedIn: lazy(() => import("../icons/LinkedIn")),
  Gmail: lazy(() => import("../icons/Gmail")),
};

const Icon: React.FC<IconProps> = ({
  name,
  w = "30",
  h = "30",
  c = "dark",
  cls = "",
  m,
  ...rest
}) => {
  const key = name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
  if (!icons[key]) return null;
  const Component = icons[key];

  return (
    <Suspense fallback={"loading"}>
      <span
        className={` ${cls} `}
        style={{
          minWidth: `${w}px`,
          minHeight: `${h || w}px`,
          margin: m,
        }}
        {...rest}
      >
        <Component style={{ width: w, height: h || w }} />
      </span>
    </Suspense>
  );
};

export default Icon;