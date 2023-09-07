import type { ServerRuntime } from "next"
import { ImageResponse } from "next/server"
import { ogImageSchema } from "@/lib/og"

export const runtime: ServerRuntime = "edge"

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parsedValues = ogImageSchema.parse(
      Object.fromEntries(url.searchParams)
    )

    const { title } = parsedValues

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            color: "white",
            padding: "32px",
            background: "black",
            backgroundImage: "url(https://cdn.discordapp.com/attachments/1117725195612983376/1149287902111617124/SO4wC0d.png)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              fontSize: "1.5rem",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", fontSize: "1.5rem", fontWeight: "bold", marginTop: 400 }}>
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    error instanceof Error
      ? console.log(`${error.message}`)
      : console.log(error)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}