import { prisma } from "@/db";

export default async function Home() {
  const users = await prisma.user
                            .findMany({
                              where: {
                                emailVerified: { not: null },
                              },
                            });
                            

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 widget">
        <div>
          <b>Name</b>
        </div>
        <div>
          <b>Email</b>
        </div>
        {users.map((user) => (
          <div key={user.id} className="contents">
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
