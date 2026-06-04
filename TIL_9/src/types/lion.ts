export interface Lion {
  id?: string;
  name: string;
  part: string;
  skills: string[];
  summary: string;
  detail: string;
  email: string;
  phone: string;
  site: string;
  comment: string;
  image: string;
  isMe?: boolean;
}

export interface RandomUser {
  name: {
    first: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
}
