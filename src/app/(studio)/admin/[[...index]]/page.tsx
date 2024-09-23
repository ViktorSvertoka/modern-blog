"use client";

import config from "../../../../../sanity.config";
import { NextStudio } from "next-sanity/studio";

const AdminPage = () => {
  return <NextStudio config={config} />;
};

export default AdminPage;
