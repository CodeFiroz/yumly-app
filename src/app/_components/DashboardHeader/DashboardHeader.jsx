"use client";

import { useEffect, useState } from "react";
import styles from "./dashboardHeader.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const [shopInfo, setShopInfo] = useState(null);
  const [shopName, setShopName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const localStorageData = localStorage.getItem("shop");

    if (!localStorageData) {
      router.push("/login");
    } else {
      const parsedData = JSON.parse(localStorageData);
      setShopInfo(parsedData);
      setShopName(parsedData.name); // Access name after parsing the data
    }
  }, [router]); // Adding router to dependency array ensures no re-renders

  return (
    <div className={styles.header}>
      <h3>Dashboard</h3>

      <div>
        <div className={styles.icon}>
          <button title="Change Theme">
            <i className="fi fi-rr-moon"></i>
          </button>
          <Link href="#" title="View Store">
            <i className="fi fi-rr-shop"></i>
          </Link>
          <button title="Logout">
            <i className="fi fi-rr-sign-out-alt"></i>
          </button>
          <p>{shopName || "Shop Name Not Available"}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
