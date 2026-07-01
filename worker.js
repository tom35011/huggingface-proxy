export default {
  async fetch(request) {
    const url = "https://api-inference.huggingface.co/models/meta-llama/Llama-3-8B-Instruct";

    const body = await request.json();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer hf_aAOYvGqWoXMGaPcuLBuUQIIIctQHQNAwh"
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
