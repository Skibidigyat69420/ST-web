/// <reference types="@cloudflare/workers-types" />

interface Env {
  CONTACT_SUBMISSIONS: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const contentType = request.headers.get("content-type") || "";
  if (
    !contentType.includes("application/x-www-form-urlencoded") &&
    !contentType.includes("multipart/form-data")
  ) {
    return new Response(JSON.stringify({ error: "Unsupported content type" }), {
      status: 415,
      headers: { "content-type": "application/json" },
    });
  }

  const form = await request.formData();

  // Honeypot: bots often fill this hidden field
  if (form.get("website")) {
    const home = new URL("/", request.url);
    return Response.redirect(home.toString(), 303);
  }

  const name = (form.get("name") || "").toString().trim();
  const email = (form.get("email") || "").toString().trim();
  const phone = (form.get("phone") || "").toString().trim();
  const role = (form.get("role") || "").toString().trim();
  const message = (form.get("message") || "").toString().trim();
  const redirectUrl = (form.get("_redirect") || "/contact/thanks/").toString();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (
    name.length > 200 ||
    email.length > 320 ||
    phone.length > 50 ||
    message.length > 5000
  ) {
    return new Response(JSON.stringify({ error: "Invalid field lengths" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const submission = {
    name,
    email,
    phone,
    role,
    message,
    submittedAt: new Date().toISOString(),
    source: request.headers.get("referer") || "",
    ip: request.headers.get("CF-Connecting-IP") || "",
  };

  const id = crypto.randomUUID();
  const key = `submission:${submission.submittedAt}:${id}`;

  try {
    await env.CONTACT_SUBMISSIONS.put(key, JSON.stringify(submission));
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to save submission" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }

  const finalRedirect = new URL(redirectUrl, request.url);
  return Response.redirect(finalRedirect.toString(), 303);
};
