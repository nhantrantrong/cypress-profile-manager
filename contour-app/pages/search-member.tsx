import type { NextPage } from "next";
import { useState } from "react";
import MemberList from "../components/MemberList";
import SearchBar from "../components/SearchBar";
import { EndPoints } from "../config";

const Home: NextPage = () => {
  const [memberList, updateMemberList] = useState([] as Member[]);

  const [queryString, updateId] = useState("");

  const [loading, setLoading] = useState(true);

  async function getMember(event: { preventDefault: () => void }) {
    setLoading(false);
    event.preventDefault();
    const query = new URLSearchParams({
      queryString: queryString,
    });
    const response = await fetch(`${EndPoints.GetMembers}?${query}`);

    if (response.ok) {
      const result = await response.json();
      updateMemberList(result);
    } else {
      updateMemberList([]);
    }
  }

  return (
    <div className="px-10 py-10">
      <SearchBar
        searchFunction={getMember}
        updateInput={updateId}
        placeholder="Query String"
      />
      <MemberList memberList={memberList} loading={loading} />
    </div>
  );
};

export default Home;
