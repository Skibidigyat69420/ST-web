/// <reference types="@cloudflare/workers-types" />

interface Env {
  CONTACT_SUBMISSIONS?: KVNamespace;
}

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxJs49OHIMBQ1VLchjBzapwPc4xlUNcobQw2P-bD_dhlOv7Uf5bQ8jC1knZ3BJTKrHL3g/exec";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request } = context;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  // Honeypot: silently accept bot submissions without forwarding them
  if (body.website) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const iAmA = String(body.iAmA || "").trim();
  const message = String(body.message || "").trim();

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

  try {
    const gasResponse = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, iAmA, message }),
      redirect: "manual",
    });

    // Google Apps Script returns a 302 redirect on success
    if (
      !gasResponse.ok &&
      gasResponse.status !== 302 &&
      gasResponse.status !== 303
    ) {
      throw new Error(`Apps Script returned ${gasResponse.status}`);
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to submit. Please try again." }),
      { status: 502, headers: { "content-type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
