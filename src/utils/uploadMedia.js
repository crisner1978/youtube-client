import axios from "axios";

// Cloudinary Upload Media Function
export async function uploadMedia(uploadObject) {
  const { type, file, preset } = uploadObject;

  const formData = new FormData();
  formData.append("upload_preset", preset);
  formData.append("file", file);

  const data = await axios
    .post(`https://api.cloudinary.com/v1_1/dtram9qiy/${type}/upload`, formData)
    .then((res) => res.data);
	
	return data.secure_url
}
