import { useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function App() {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "kim",
  });

  const handleChangeName = (name: string) => {
    setUser(prev => ({
      ...prev,
      name,
    }));
  };

  return <Profile user={user} onChangeName={handleChangeName} />;
}

type Props = {
  user: {
    id: number;
    name: string;
  };
  onChangeName: (name: string) => void;
};

function Profile({ user, onChangeName }: Props) {
  return (
    <div>
      <h1>{user.name}</h1>

      <input value={user.name} onChange={e => onChangeName(e.target.value)} />
    </div>
  );
}
