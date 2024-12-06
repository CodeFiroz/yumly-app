"use client";

import style from "./DashboardSidebar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const DashboardSidebar = () => {
  const [shopInfo, setShopInfo] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem("shop");
    if (localStorageData) {
      setShopInfo(JSON.parse(localStorageData));
    }
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className={style.dashboardSidebar}>
      <div className={style.storeAvatar}>
        <span>{shopInfo?.name?.[0] || "S"}</span>
        {/* Fallback to 'S' if shopInfo or name is undefined */}
      </div>

      <ul>
        <li>
          <Link href="/">
            <i className="fi fi-rr-model-cube-space"></i> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fi fi-rr-shop"></i> <span>MyStore</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fi fi-rr-salad"></i> <span>Menus</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fi fi-rr-list"></i> <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fi fi-rr-interrogation"></i> <span>Help</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fi fi-rr-settings"></i> <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fi fi-rr-exit"></i> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
