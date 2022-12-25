import React from "react";

type Props = {
  memberList: Member[];
  loading: boolean;
};

const MemberList = ({ memberList, loading }: Props) => {
  if (loading && !memberList.length) {
    return <h1 className="px-1 py-10 text-3xl">Nothing to display... </h1>;
  }

  return (
    <div className="overflow-x-auto relative px-10 py-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Member name
            </th>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Company
            </th>
            <th scope="col" className="py-3 px-6">
              Email address
            </th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((memberInfo) => (
            <tr key={memberInfo.id}>
              <td className="border px-6 py-4">{memberInfo.id}</td>
              <td className="border px-6 py-4">
                {memberInfo.firstName} {memberInfo.lastName}
              </td>
              <td className="border px-6 py-4">{memberInfo.title}</td>
              <td className="border px-6 py-4">{memberInfo.company}</td>
              <td className="border px-6 py-4">{memberInfo.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
