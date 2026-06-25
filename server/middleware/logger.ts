export default defineEventHandler((event) => {
  const userAgent = getHeader(event, "user-agent") ?? "";

  if (userAgent.toLowerCase().includes("bot")) {
    console.log(`[bot] ${userAgent}`);
  }
});
