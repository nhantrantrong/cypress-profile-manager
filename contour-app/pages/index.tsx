import type { NextPage } from "next";
import { useEffect, useState } from "react";
import MemberList from "../components/MemberList";
import { EndPoints } from "../config";

const Home: NextPage = () => {
  const [memberList, updateMemberList] = useState([] as Member[]);
  const [loading, setLoading] = useState(true);

  async function loadMembers() {
    const response = await fetch(EndPoints.GetMembers);
    const result = await response.json();

    updateMemberList(result);
    setLoading(false);
  }

  useEffect(() => {
    loadMembers();
  }, []);

  return (
    <div className="px-10 py-10">
      <MemberList memberList={memberList} loading={loading} />
    </div>
  );
};
export default Home;
