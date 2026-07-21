// contactController.js
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const sendContactMessage = async (data) => {

  try {
    const res = await fetch(`${BACKEND_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });


    let result;
    try {
      result = await res.json();
    } catch {
      throw new Error("Invalid JSON response from server");
    }

    if (!res.ok) throw new Error(result.error || "Failed to send message");

    return { success: true, message: result.message };
  } catch (error) {
    return { success: false, error: error.message || "Server error" };
  }
};
