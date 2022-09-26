import React, { useState } from "react";
import { AllView } from "./AllView";
import { Cache } from "./Cache";
type SectionType = "一覧表示" | "キャッシュ" | "TOP";

export const Container: React.FC = () => {
  const [section, setSection] = useState<SectionType>("TOP");
  return (
    <>
      <h1>react-query-test</h1>
      <select
        name="section"
        id="section-select"
        onClick={(e) => setSection(e.currentTarget.value as SectionType)}
      >
        <option value="TOP">---</option>
        <option value="一覧表示">一覧表示</option>
        <option value="キャッシュ">キャッシュ</option>
      </select>
      {section === "一覧表示" && <AllView />}
      {section === "キャッシュ" && <Cache />}
    </>
  );
};
