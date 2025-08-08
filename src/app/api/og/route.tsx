import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Ahmer Zulfiqar - Full-Stack Developer";
    const description = searchParams.get("description") || "Building exceptional web and mobile experiences";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0f172a",
            backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            position: "relative",
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 25px 25px, #334155 2px, transparent 0), radial-gradient(circle at 75px 75px, #334155 2px, transparent 0)`,
              backgroundSize: "100px 100px",
              opacity: 0.1,
            }}
          />
          
          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "24px",
              }}
            >
              AZ
            </div>
            
            {/* Title */}
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "24px",
                maxWidth: "900px",
              }}
            >
              {title}
            </h1>
            
            {/* Description */}
            <p
              style={{
                fontSize: "32px",
                color: "#94a3b8",
                lineHeight: 1.4,
                maxWidth: "800px",
              }}
            >
              {description}
            </p>
            
            {/* Tech badges */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "48px",
              }}
            >
              {["Next.js", "React", "TypeScript", "Node.js"].map((tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#1e293b",
                    color: "#e2e8f0",
                    fontSize: "20px",
                    borderRadius: "24px",
                    border: "1px solid #334155",
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          {/* Website URL */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              color: "#64748b",
              fontSize: "24px",
            }}
          >
            ahmerzulfiqar.dev
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
