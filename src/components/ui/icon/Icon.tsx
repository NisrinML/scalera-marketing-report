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
  Facebook: lazy(() => import("../icons/Facebook")),
  Gmail: lazy(() => import("../icons/Gmail")),
  SInstagram: lazy(() => import("../icons/SInstagram")),
  SFacebook: lazy(() => import("../icons/SFacebook")),
  SGmail: lazy(() => import("../icons/SGmail")),
  Face1: lazy(() => import("../icons/Face1")),
  Face2: lazy(() => import("../icons/Face2")),
  Face3: lazy(() => import("../icons/Face3")),
  Face4: lazy(() => import("../icons/Face4")),
  Face5: lazy(() => import("../icons/Face5")),
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