export async function GET() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mike" },
  ];

  return Response.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    message: "Data received",
    data: body,
  });
}
