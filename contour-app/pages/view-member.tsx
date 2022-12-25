import type { NextPage } from "next";
import { useState } from "react";
import MemberInfo from "../components/MemberInfo";
import SearchBar from "../components/SearchBar";
import { EndPoints } from "../config";

const Home: NextPage = () => {
  const [member, updateMember] = useState({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phoneNumber: "",
    website: "",
    email: "",
  } as Member);

  const [id, updateId] = useState("");

  const [loading, setLoading] = useState(true);

  async function getMember(event: { preventDefault: () => void }) {
    event.preventDefault();

    const response = await fetch(EndPoints.GetMember.replace(":id", id));
    if (response.ok) {
      const result = await response.json();
      updateMember(result);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }

  return (
    <div className="px-10 py-10">
      <SearchBar searchFunction={getMember} updateInput={updateId} placeholder="ID"/>
      {!loading ? (
        <MemberInfo memberInfo={member} />
      ) : (
        <h1 className="px-1 py-10 text-3xl">Nothing to display... </h1>
      )}
    </div>
  );
};

export default Home;
