import { v4 as uuid_v4 } from 'uuid';

const generateId = () => {
  return uuid_v4();
};

export function appendToUserId(user_id: string, new_id: string) {
 return "ok"
}

export default generateId;
