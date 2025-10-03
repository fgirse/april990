import { type NextRequest, NextResponse } from "next/server"


const URL = "https://swapi.dev/api/people/1/"

export default async function GET(request: NextRequest) {
  try {
   

    const response = await fetch(`URL`, {
      headers: {
      "Access-Control-Allow-Origin": "",
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Starwar API Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
console

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching starwars data:", error)
    return NextResponse.json({ error: "Failed to fetch starwars data" }, { status: 500 })
  }
}
