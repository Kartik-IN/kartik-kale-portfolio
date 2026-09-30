import { NextResponse } from "next/server";

const query = `query($login: String!) { user(login: $login) { contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { contributionCount contributionLevel } } } } } }`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const login = process.env.GITHUB_USERNAME || "Kartik-IN";
  if (!token) return NextResponse.json({ error: "GITHUB_TOKEN is not configured" }, { status: 500 });
  const response = await fetch("https://api.github.com/graphql", { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ query, variables: { login } }), next: { revalidate: 3600 } });
  const result = await response.json();
  if (!response.ok || result.errors?.length || !result.data?.user) return NextResponse.json({ error: result.errors?.[0]?.message || "GitHub user not found" }, { status: 502 });
  const calendar = result.data.user.contributionsCollection.contributionCalendar;
  return NextResponse.json({ totalContributions: calendar.totalContributions, days: calendar.weeks.flatMap((week: { contributionDays: unknown[] }) => week.contributionDays) });
}
