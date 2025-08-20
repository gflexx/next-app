import { notFound } from "next/navigation";
import React from "react";

async function fetchUser(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return user;
}

async function page({params}: { params: Promise<{ userId: string }> }) {
  const {userId} = await params;
  const user = await fetchUser(userId);
  if (!user) {
    notFound();
  }
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
    </div>
  );
}

export default page;
