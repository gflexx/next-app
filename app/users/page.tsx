import Link from "next/link";
import React from "react";

async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div>
      <p className="font-bold mb-7">Users List:</p>
      <ul className="">
        {users.map((user: { id: number; name: string }) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li className="hover:cursor-pointer mb-3" key={user.id}>
              {user.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default page;
