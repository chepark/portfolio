// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "kitty" });
}

// write graphql endpoint - need apollo micro server instance
// graphql server embeded in nextjs server
