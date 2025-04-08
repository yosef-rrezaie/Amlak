"use client";
import { useState } from "react";
import styles from "./AddProfilePage.module.css";
export default function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  return <div className=""></div>;
}
