import { NextRequest } from "next/server";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY || "",
    "x-rapidapi-host": process.env.ONLINE_MOVIE_DB_HOSTNAME || "",
  },
};
export async function GET(req: NextRequest) {
  const q = new URLSearchParams(req.nextUrl.searchParams).get("q");
  const url =
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=" +
    encodeURI(q || "");

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error(error);
  }
}
