import React from "react";

const IconDevices = ({ stroke = "#4B40F7", className = "" }) => (
  <svg
    width='24'
    height='24'
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 8H14C13.4477 8 13 8.44772 13 9V19C13 19.5523 13.4477 20 14 20H20C20.5523 20 21 19.5523 21 19V9C21 8.44772 20.5523 8 20 8Z'
      stroke={stroke}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M18 8V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V17C3 17.2652 3.10536 17.5196 3.29289 17.7071C3.48043 17.8946 3.73478 18 4 18H13'
      stroke={stroke}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M16 9H18'
      stroke={stroke}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);
export default IconDevices;
