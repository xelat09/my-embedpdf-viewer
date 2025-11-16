import { SvgIcon, SvgIconProps } from '@mui/material';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import { forwardRef } from 'react';

export const PageSettingsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M6 2C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H12V20H6V4H13V9H18V12H20V8L14 2M18 14C17.87 14 17.76 14.09 17.74 14.21L17.55 15.53C17.25 15.66 16.96 15.82 16.7 16L15.46 15.5C15.35 15.5 15.22 15.5 15.15 15.63L14.15 17.36C14.09 17.47 14.11 17.6 14.21 17.68L15.27 18.5C15.25 18.67 15.24 18.83 15.24 19C15.24 19.17 15.25 19.33 15.27 19.5L14.21 20.32C14.12 20.4 14.09 20.53 14.15 20.64L15.15 22.37C15.21 22.5 15.34 22.5 15.46 22.5L16.7 22C16.96 22.18 17.24 22.35 17.55 22.47L17.74 23.79C17.76 23.91 17.86 24 18 24H20C20.11 24 20.22 23.91 20.24 23.79L20.43 22.47C20.73 22.34 21 22.18 21.27 22L22.5 22.5C22.63 22.5 22.76 22.5 22.83 22.37L23.83 20.64C23.89 20.53 23.86 20.4 23.77 20.32L22.7 19.5C22.72 19.33 22.74 19.17 22.74 19C22.74 18.83 22.73 18.67 22.7 18.5L23.76 17.68C23.85 17.6 23.88 17.47 23.82 17.36L22.82 15.63C22.76 15.5 22.63 15.5 22.5 15.5L21.27 16C21 15.82 20.73 15.65 20.42 15.53L20.23 14.21C20.22 14.09 20.11 14 20 14M19 17.5C19.83 17.5 20.5 18.17 20.5 19C20.5 19.83 19.83 20.5 19 20.5C18.16 20.5 17.5 19.83 17.5 19C17.5 18.17 18.17 17.5 19 17.5Z" />
  </SvgIcon>
);

/** Same icon, rotated 180 deg so it “points” the other way. */
export const ViewSidebarReverseIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <ViewSidebarOutlinedIcon
    ref={ref}
    {...props}
    sx={{
      transform: 'rotate(180deg)',
      // keep any sx the caller passes:
      ...props.sx,
    }}
  />
));

export const RedactAreaIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 20h-3" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
    <path d="M3 20v-3" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
    <path d="M3 13v-3" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
    <path d="M3 6v-3" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
    <path d="M3 3h3" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
    <path d="M10 3h3" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
    <path d="M17 3h3" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
    <path d="M20 3v3" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
    <defs>
      <clipPath id="redactClip">
        <rect x="10" y="10" width="12" height="12" />
      </clipPath>
    </defs>
    <rect
      x="10"
      y="10"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
    />
    <g clipPath="url(#redactClip)">
      <path
        d="M-2 24l14 -14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 24l14 -14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 24l14 -14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 24l15 -15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24l15 -15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 24l15 -15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </SvgIcon>
));

RedactAreaIcon.displayName = 'RedactAreaIcon';

export const RedactIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 4h14" stroke="currentColor" strokeWidth={3} />
    <path d="M12 4v8" stroke="currentColor" strokeWidth={3} />
    <defs>
      <clipPath id="stripeClip">
        <rect x="2" y="12" width="20" height="10" />
      </clipPath>
    </defs>
    <rect x="2" y="12" width="20" height="10" fill="none" stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#stripeClip)">
      <path
        d="M-7 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M-3 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 24l12 -12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </SvgIcon>
));

RedactIcon.displayName = 'RedactIcon';


export const SlowViewIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24" fill="none">
    <g id="g1">
      <image
        width={24}
        height={24}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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&#10;AAAASUVORK5CYII=&#10;"
        id="image1"
      />
    </g>
  </SvgIcon>
));
SlowViewIcon.displayName = 'SlowViewIcon';

export const PdfDownloadIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24" fill="none" >
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="scale(0.267)"
    >
      <path
        d="M 78.806 62.716 V 20.496 c 0 -1.214 -0.473 -2.356 -1.332 -3.216 L 61.526 1.332 C 60.667 0.473 59.525 0 58.31 0 H 15.742 c -2.508 0 -4.548 2.04 -4.548 4.548 V 43.16 v 19.556 C 34.114 65.376 56.665 65.47 78.806 62.716 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(220,223,225)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 11.194 62.716 v 11.23 v 11.506 c 0 2.508 2.04 4.548 4.548 4.548 h 58.517 c 2.508 0 4.548 -2.04 4.548 -4.548 V 62.716 H 11.194 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(234,84,64)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <polygon
        points="60.27,18.41 78.81,36.88 78.73,19.73 "
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(196,203,210)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="  matrix(1 0 0 1 0 0) "
      />
      <path
        d="M 77.474 17.28 L 61.526 1.332 c -0.675 -0.676 -1.529 -1.102 -2.453 -1.258 v 15.382 c 0 2.358 1.919 4.277 4.277 4.277 h 15.382 C 78.576 18.81 78.15 17.956 77.474 17.28 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(171,178,184)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 33.092 68.321 h -4.374 c -0.69 0 -1.25 0.56 -1.25 1.25 v 8.091 v 5.541 c 0 0.69 0.56 1.25 1.25 1.25 s 1.25 -0.56 1.25 -1.25 v -4.291 h 3.124 c 2.254 0 4.088 -1.834 4.088 -4.088 v -2.415 C 37.18 70.155 35.346 68.321 33.092 68.321 z M 34.68 74.824 c 0 0.876 -0.712 1.588 -1.588 1.588 h -3.124 v -5.591 h 3.124 c 0.876 0 1.588 0.712 1.588 1.588 V 74.824 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(255,255,255)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 45.351 84.453 H 41.27 c -0.69 0 -1.25 -0.56 -1.25 -1.25 V 69.571 c 0 -0.69 0.56 -1.25 1.25 -1.25 h 4.082 c 2.416 0 4.38 1.965 4.38 4.38 v 7.371 C 49.731 82.488 47.767 84.453 45.351 84.453 z M 42.52 81.953 h 2.832 c 1.037 0 1.88 -0.844 1.88 -1.881 v -7.371 c 0 -1.036 -0.844 -1.88 -1.88 -1.88 H 42.52 V 81.953 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(255,255,255)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 61.282 68.321 H 54.07 c -0.69 0 -1.25 0.56 -1.25 1.25 v 13.632 c 0 0.69 0.56 1.25 1.25 1.25 s 1.25 -0.56 1.25 -1.25 v -5.566 h 3.473 c 0.69 0 1.25 -0.56 1.25 -1.25 s -0.56 -1.25 -1.25 -1.25 H 55.32 v -4.315 h 5.962 c 0.69 0 1.25 -0.56 1.25 -1.25 S 61.973 68.321 61.282 68.321 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(255,255,255)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 60.137 40.012 c -0.154 -0.374 -0.52 -0.617 -0.924 -0.617 h -4.805 V 27.616 c 0 -0.552 -0.447 -1 -1 -1 H 40.592 c -0.552 0 -1 0.448 -1 1 v 11.778 h -4.805 c -0.404 0 -0.769 0.244 -0.924 0.617 c -0.155 0.374 -0.069 0.804 0.217 1.09 l 12.213 12.213 c 0.195 0.195 0.451 0.293 0.707 0.293 s 0.512 -0.098 0.707 -0.293 L 59.92 41.102 C 60.206 40.815 60.292 40.386 60.137 40.012 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(196,203,210)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 58.137 38.012 c -0.154 -0.374 -0.52 -0.617 -0.924 -0.617 h -4.805 V 25.616 c 0 -0.552 -0.447 -1 -1 -1 H 38.592 c -0.552 0 -1 0.448 -1 1 v 11.778 h -4.805 c -0.404 0 -0.769 0.244 -0.924 0.617 c -0.155 0.374 -0.069 0.804 0.217 1.09 l 12.213 12.213 c 0.195 0.195 0.451 0.293 0.707 0.293 s 0.512 -0.098 0.707 -0.293 L 57.92 39.102 C 58.206 38.815 58.292 38.386 58.137 38.012 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(234,84,64)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
    </g>
  </SvgIcon>
));
PdfDownloadIcon.displayName = 'PdfDownloadIcon';

export const PdfWithAnnotDownloadIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} width={24} height={24} viewBox="0 0 24 24" fill="none" >
    <g
      style={{
        opacity: 1,
        fill: "none",
        fillRule: "nonzero",
        stroke: "none",
        strokeWidth: 0,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
      }}
      transform="scale(0.267)"

      id="g8"
    >
      <path
        d="m 78.806,62.716 v -42.22 c 0,-1.214 -0.473,-2.356 -1.332,-3.216 L 61.526,1.332 C 60.667,0.473 59.525,0 58.31,0 H 15.742 C 13.234,0 11.194,2.04 11.194,4.548 V 43.16 62.716 c 22.92,2.66 45.471,2.754 67.612,0 z"
        style={{
          opacity: 1,
          fill: "#dcdfe1",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
        }}
        strokeLinecap="round"
        id="path1"
      />
      <path
        d="m 11.194,62.716 v 11.23 11.506 c 0,2.508 2.04,4.548 4.548,4.548 h 58.517 c 2.508,0 4.548,-2.04 4.548,-4.548 V 62.716 Z"
        style={{
          opacity: 1,
          fill: "#ffcc00",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
        }}
        strokeLinecap="round"
        id="path2"
      />
      <polygon
        points="78.73,19.73 60.27,18.41 78.81,36.88 "
        style={{
          opacity: 1,
          fill: "#c4cbd2",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
        }}
        id="polygon2"
      />
      <path
        d="M 77.474,17.28 61.526,1.332 C 60.851,0.656 59.997,0.23 59.073,0.074 v 15.382 c 0,2.358 1.919,4.277 4.277,4.277 H 78.732 C 78.576,18.81 78.15,17.956 77.474,17.28 Z"
        style={{
          opacity: 1,
          fill: "#abb2b8",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
        }}
        strokeLinecap="round"
        id="path3"
      />
      <path
        d="m 33.092,68.321 h -4.374 c -0.69,0 -1.25,0.56 -1.25,1.25 v 8.091 5.541 c 0,0.69 0.56,1.25 1.25,1.25 0.69,0 1.25,-0.56 1.25,-1.25 v -4.291 h 3.124 c 2.254,0 4.088,-1.834 4.088,-4.088 v -2.415 c 0,-2.254 -1.834,-4.088 -4.088,-4.088 z m 1.588,6.503 c 0,0.876 -0.712,1.588 -1.588,1.588 h -3.124 v -5.591 h 3.124 c 0.876,0 1.588,0.712 1.588,1.588 z"
        style={{
          opacity: 1,
          fill: "#ffffff",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
        }}
        strokeLinecap="round"
        id="path4"
      />
      <path
        d="M 45.351,84.453 H 41.27 c -0.69,0 -1.25,-0.56 -1.25,-1.25 V 69.571 c 0,-0.69 0.56,-1.25 1.25,-1.25 h 4.082 c 2.416,0 4.38,1.965 4.38,4.38 v 7.371 c -10e-4,2.416 -1.965,4.381 -4.381,4.381 z m -2.831,-2.5 h 2.832 c 1.037,0 1.88,-0.844 1.88,-1.881 v -7.371 c 0,-1.036 -0.844,-1.88 -1.88,-1.88 H 42.52 Z"
        style={{
          opacity: 1,
          fill: "#ffffff",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
        }}
        strokeLinecap="round"
        id="path5"
      />
      <path
        d="M 61.282,68.321 H 54.07 c -0.69,0 -1.25,0.56 -1.25,1.25 v 13.632 c 0,0.69 0.56,1.25 1.25,1.25 0.69,0 1.25,-0.56 1.25,-1.25 v -5.566 h 3.473 c 0.69,0 1.25,-0.56 1.25,-1.25 0,-0.69 -0.56,-1.25 -1.25,-1.25 H 55.32 v -4.315 h 5.962 c 0.69,0 1.25,-0.56 1.25,-1.25 0,-0.69 -0.559,-1.251 -1.25,-1.251 z"
        style={{
          opacity: 1,
          fill: "#ffffff",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
        }}
        strokeLinecap="round"
        id="path6"
      />
      <path
        d="m 60.137,40.012 c -0.154,-0.374 -0.52,-0.617 -0.924,-0.617 H 54.408 V 27.616 c 0,-0.552 -0.447,-1 -1,-1 H 40.592 c -0.552,0 -1,0.448 -1,1 v 11.778 h -4.805 c -0.404,0 -0.769,0.244 -0.924,0.617 -0.155,0.374 -0.069,0.804 0.217,1.09 l 12.213,12.213 c 0.195,0.195 0.451,0.293 0.707,0.293 0.256,0 0.512,-0.098 0.707,-0.293 L 59.92,41.102 c 0.286,-0.287 0.372,-0.716 0.217,-1.09 z"
        style={{
          opacity: 1,
          fill: "#ffcc00",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
        }}
        strokeLinecap="round"
        id="path7"
      />
    </g>
    <path
      style={{
        fill: "#ffcc00",
        strokeWidth: 0.410915,
      }}
      d="m 88.152719,214.5292 v -15.40931 h 4.33501 c 4.72279,0 6.04947,0.40569 7.545241,2.30724 0.82527,1.04916 0.85811,1.54567 0.85811,12.97244 0,9.81659 -0.10833,12.09101 -0.62333,13.08691 -1.025311,1.98273 -2.475031,2.45203 -7.574561,2.45203 h -4.54047 z"
      id="path10"
    />
    <path
      style={{
        fill: "#ffcc00",
        strokeWidth: 0.410915,
      }}
      d="m 56.814031,206.72182 v -7.60193 h 4.560692 c 7.217251,0 8.232561,0.81573 8.50974,6.83696 0.197811,4.29707 -0.298613,6.31405 -1.855433,7.53864 -0.926737,0.72897 -1.662023,0.82826 -6.133978,0.82826 h -5.081021 z"
      id="path11"
    />
    <path
      style={{
        fill: "#ffcc00",
        stroke: "none",
        strokeWidth: 0.410915,
      }}
      d="M 80.144329,126.9079 C 61.168683,107.95037 61.042936,107.79865 62.907382,106.11135 c 0.639457,-0.5787 1.831794,-0.68006 7.999897,-0.68006 h 7.24844 l 0.11567,-17.295024 0.11568,-17.295022 0.97008,-0.785235 c 0.92319,-0.74728 1.87248,-0.785234 19.63986,-0.785234 H 117.6668 l 1.00861,1.008609 1.00861,1.008609 v 17.071648 17.071649 h 7.33278 c 6.58202,0 7.40241,0.0769 8.01284,0.75146 1.79899,1.98786 1.79678,1.99059 -16.47564,20.31755 -15.97763,16.02533 -18.52568,18.37882 -19.898091,18.37882 -0.28774,0 -8.61795,-8.08705 -18.51158,-17.97122 z"
      id="path12"
    />
    <path
      style={{
        fill: "#ffcc00",
        stroke: "none",
        strokeWidth: 0.410915,
        strokeOpacity: 1,
      }}
      d="m 77.879839,252.13202 -69.2391629,-0.20956 -1.926226,-1.13232 c -2.070298,-1.21702 -4.493127,-3.89261 -5.312214,-5.86642 -0.59350198,-1.4302 -1.08412398,-23.11405 -1.14560798,-50.63208 l -0.03971,-17.77207 H 94.932809 189.6487 v 32.89624 32.89624 l -1.25845,2.54518 c -1.6369,3.31056 -3.29898,4.99152 -6.40222,6.47495 l -2.52424,1.20666 -16.17239,-0.0986 c -8.89482,-0.0542 -47.33002,-0.19293 -85.411561,-0.30819 z M 51.889473,236.41107 c 0.8835,-0.82468 0.924558,-1.1518 0.924558,-7.36601 0,-4.91898 0.125116,-6.50735 0.513644,-6.5208 6.327613,-0.21916 11.539001,-0.8258 13.126431,-1.52799 2.220123,-0.98207 4.516683,-3.19539 5.762253,-5.55342 0.79109,-1.49763 0.93776,-2.51449 1.07025,-7.41972 0.0935,-3.46222 -0.0318,-6.4201 -0.32047,-7.56664 -0.92515,-3.67412 -4.5757,-7.33665 -8.316693,-8.34399 -2.190403,-0.58982 -16.418065,-0.60441 -17.513844,-0.018 -0.47314,0.25322 -1.052221,1.15164 -1.286854,1.99649 -0.268073,0.96526 -0.42406,8.86576 -0.419758,21.26001 0.0063,18.05803 0.06681,19.80047 0.716813,20.63026 1.483123,1.89336 3.975852,2.07988 5.74367,0.42978 z m 71.582437,-0.11244 c 0.5159,-0.51525 0.675,-2.17686 0.84333,-8.80725 0.1141,-4.4947 0.35065,-8.31537 0.52567,-8.49039 0.17501,-0.17501 2.73036,-0.42484 5.67856,-0.55518 5.08645,-0.22486 5.40032,-0.28899 6.14256,-1.25496 1.14203,-1.48627 1.04468,-3.893 -0.20813,-5.14581 -0.97159,-0.97159 -1.21292,-1.00861 -6.57464,-1.00861 h -5.56603 v -5.95827 -5.95827 h 9.0588 9.05881 l 1.00861,-1.0086 c 1.46586,-1.46586 1.39377,-3.81053 -0.16303,-5.30203 l -1.17164,-1.1225 -11.80899,0.12106 -11.80901,0.12106 -0.78501,0.97008 c -0.74967,0.92641 -0.78501,1.90835 -0.78501,21.8096 v 20.83951 l 0.92456,0.85243 c 0.50851,0.46884 1.29438,0.92824 1.74639,1.02088 1.11479,0.22848 3.1082,-0.34772 3.8842,-1.12275 z m -21.96446,0.0695 c 2.28483,-1.06624 4.65356,-3.46128 5.9643,-6.03055 0.83669,-1.64005 0.85953,-2.14062 0.7369,-16.14693 -0.11386,-13.00399 -0.20089,-14.59058 -0.86732,-15.81136 -1.06063,-1.94291 -3.71989,-4.39714 -5.96011,-5.5006 -1.826281,-0.89956 -2.377341,-0.94984 -10.411691,-0.94984 -7.76566,0 -8.55652,0.0662 -9.34831,0.78279 -0.85769,0.7762 -0.86497,0.95822 -0.86497,21.62035 0,20.45859 0.0155,20.85725 0.85165,21.92026 l 0.85166,1.0827 8.49666,-0.004 c 8.03579,-0.004 8.6081,-0.056 10.551231,-0.96281 z"
      id="path13"
    />
  </SvgIcon>
));
PdfWithAnnotDownloadIcon.displayName = 'PdfWithAnnotDownloadIcon';

export const MailDocumentIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24" fill="none" >
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="scale(0.267)"
    >
      <path
        d="M 81.253 90 H 8.747 c -1.697 0 -3.072 -1.375 -3.072 -3.072 V 34.121 h 78.65 v 52.807 C 84.325 88.625 82.95 90 81.253 90 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(243,172,71)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <polygon
        points="45,0 5.67,34.12 5.67,34.12 5.67,34.12 45,68.24 84.33,34.12 "
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(69,96,116)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="  matrix(1 0 0 1 0 0) "
      />
      <path
        d="M 45 55.879 L 6.645 89.158 C 7.195 89.677 7.931 90 8.747 90 h 72.507 c 0.815 0 1.552 -0.323 2.102 -0.842 C 81.509 87.557 45 55.879 45 55.879 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(241,154,61)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 16.173 7.816 v 21.89 v 9.524 l 21.702 18.831 L 45 51.879 c 0 0 2.909 2.524 7.125 6.182 L 73.827 39.23 v -9.524 V 7.816 H 16.173 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(240,240,240)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <rect
        x={23.63}
        y={16.66}
        rx={0}
        ry={0}
        width={42.74}
        height={3}
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(220,103,84)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
      />
      <rect
        x={23.63}
        y={26.66}
        rx={0}
        ry={0}
        width={42.74}
        height={3}
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(220,103,84)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
      />
      <rect
        x={23.63}
        y={36.66}
        rx={0}
        ry={0}
        width={19.37}
        height={3}
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(220,103,84)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
      />
    </g>
  </SvgIcon>
));

  export const ThumbnailIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="-2 -2 24 24" fill="none" >
          <path
      id="rect8"
      style={{
        fill: "#f9f9f9",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 2.58932,
      }}
      d="M 8.5253906e-8,1.5286865e-7 V 18.000001 H 19.582664 V 1.5286865e-7 Z M 2.3198578,2.1062178 H 11.193354 V 15.662177 H 2.3198578 Z m 11.0906472,0 h 3.697427 v 3.567357 h -3.697427 z m 0,4.994301 h 3.697427 v 3.5673572 h -3.697427 z m 0,4.9943002 h 3.697427 v 3.567358 h -3.697427 z"
    />
    </SvgIcon>
));
MailDocumentIcon.displayName = 'PdfWithAnnotDownloadIcon';
