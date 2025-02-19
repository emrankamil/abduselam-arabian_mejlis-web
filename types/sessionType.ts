export type Session = {
  User_id: string;
  Name: string;
  Email: string;
  User_type: "ADMIN" | "USER"; // Assuming there are only two user types
  exp: number;
};
