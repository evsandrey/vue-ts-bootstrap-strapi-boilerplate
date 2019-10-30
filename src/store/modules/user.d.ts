export interface UserRegisterRq {
  username: string;
  email: string;
  password: string;
}

export interface UserLoginRq {
  identifier: string;
  password: string;
}

export interface UserRs {
  jwt: string;
  user: UserProfile;
}

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked?: null;
  role: Role;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
}
