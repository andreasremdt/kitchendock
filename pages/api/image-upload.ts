import { NextApiRequest, NextApiResponse } from "next";
import { upload } from "@/lib/cloudinary";
import { getSession } from "@/lib/auth";

type Data = {
  publicId?: string;
  error?: string;
};

export const config = {
  api: {
    responseLimit: "5mb",
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const user = await getSession(req);

  if (!user) {
    return res.status(401).json({});
  }

  if (req.method === "POST") {
    try {
      const { image } = req.body;

      const publicId = await upload(user.id, image);

      res.status(201).json({ publicId });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({});
    }
  } else {
    res.status(405).json({});
  }
}
