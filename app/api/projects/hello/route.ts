export async function GET() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mike" },
  ];

  return Response.json(users);
}
