"use client";
import { useState } from "react";
import styles from "./AddProfilePage.module.css";
import TextInput from "../modules/TextInput";
import RadioList from "./RadioList";
import TextList from "../modules/TextList";
import CustomeDate from "../modules/CustomeDate";
import toast, { Toaster } from "react-hot-toast";
export default function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json()
    console.log(data.error)
    if(data.error) {
      toast.error(data.error)
    }else {
      toast.success(data.message)
    }
  };
  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تلفن"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت ( تومان )"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setprofileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomeDate profileData={profileData} setProfileData={setProfileData} />
      <button className={styles.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>
      <Toaster/>
    </div>
  );
}
