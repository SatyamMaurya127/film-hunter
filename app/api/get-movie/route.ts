import { NextRequest } from "next/server";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY || "",
    "x-rapidapi-host": process.env.IMDB_HOSTNAME || "",
  },
};
export async function GET(req: NextRequest) {
  const t = new URLSearchParams(req.nextUrl.searchParams).get("t");
  const url =
    "https://imdb146.p.rapidapi.com/v1/title/?id=" + encodeURI(t || "");

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error(error);
  }
}
