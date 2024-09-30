import { NextRequest } from "next/server";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY || "",
    "x-rapidapi-host": process.env.RAPID_API_HOSTNAME || "",
  },
};
export async function GET(req: NextRequest) {
  const { q }: any = req.nextUrl.searchParams;
  const url = "https://moviedatabase8.p.rapidapi.com/Search/" + q;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error(error);
  }
}
