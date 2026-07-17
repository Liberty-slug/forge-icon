import { forwardRef } from "react";
import type { ReactNode, SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  /** Icon size in pixels (applied to both width and height). Defaults to 24. */
  size?: number | string;
  /** Stroke color. Defaults to `currentColor` so icons inherit surrounding text color. */
  color?: string;
  /** Stroke width on the 24x24 grid. Defaults to 2. */
  strokeWidth?: number | string;
}

interface IconBaseProps extends IconProps {
  children: ReactNode;
}

/**
 * Shared renderer used by every generated icon component. Not meant to be
 * imported directly by consumers -- use the individual icon components
 * instead (e.g. `HomeIcon`, `SearchIcon`).
 */
export const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  (
    {
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      children,
      ...rest
    },
    ref
  ) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={rest["aria-label"] ? undefined : true}
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
);

IconBase.displayName = "IconBase";
