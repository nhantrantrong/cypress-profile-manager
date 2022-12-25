import data from "./data";

type Member = {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  phoneNumber: string;
  website: string;
  email: string;
};

class DataBase {
  members: Member[] = [];

  constructor() {
    this.members = data;
  }

  getAllMembers(): Member[] {
    return this.shuffleMemberList(this.members);
  }

  getMember(id: number): Member | undefined {
    return this.members.find((member) => member.id === id);
  }

  getMembers(queryString: string): Member[] {
    queryString = queryString.toLowerCase();
    return this.members.filter((member) => {
      return (
        member.id.toString().toLowerCase().includes(queryString) ||
        member.lastName.toLowerCase().includes(queryString) ||
        member.firstName.toLowerCase().includes(queryString) ||
        member.title.toLowerCase().includes(queryString) ||
        member.company.toLowerCase().includes(queryString) ||
        member.email.toLowerCase().includes(queryString)
      );
    });
  }

  shuffleMemberList(memberList: Member[]) {
    return memberList
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  }

  addMember(member: Member): number {
    const id = data.length + 1;
    member.id = id;
    data.push(member);
    return id;
  }
}

const database = new DataBase();
export default database;
