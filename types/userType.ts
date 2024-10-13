export interface Message {
  flag: string;
  text: string;
}

interface UserType {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  joined_on: string;
  state: boolean;
  messages: Message[] | null;
}

export default UserType;
