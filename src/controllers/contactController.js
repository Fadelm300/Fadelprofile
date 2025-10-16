// contactController.js
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const sendContactMessage = async (data) => {
  // console.log("📤 sendContactMessage called with data:", data);
  // console.log("🌐 BACKEND_URL is:", BACKEND_URL);

  try {
    const res = await fetch(`${BACKEND_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // console.log("📥 Raw Response:", res);

    let result;
    try {
      result = await res.json();
      // console.log("📦 Parsed Response JSON:", result);
    } catch (jsonError) {
      // console.error("⚠️ Failed to parse JSON response:", jsonError);
      throw new Error("Invalid JSON response from server");
    }

    if (!res.ok) throw new Error(result.error || "Failed to send message");

    // console.log("✅ Message sent successfully:", result.message);
    return { success: true, message: result.message };
  } catch (error) {
    // console.error("🔥 ContactController Error:", error);
    return { success: false, error: error.message || "Server error" };
  }
};
