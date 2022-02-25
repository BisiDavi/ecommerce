import axios from "axios";
import sharp from "sharp";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

async function formatProductImage(url: string, name: string, index: number) {
  const formattedName = `${name.replace(/ /g, "-").toLowerCase()}-${index}`;
  return await axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      sharp(response.data)
        .webp()
        .toBuffer({ resolveWithObject: true })
        .then((response: any) => {
          return imagemin.buffer(response.data, {
            plugins: [
              imageminWebp({
                quality: 40,
              }),
            ],
          });
        })
        .then((response: any) => {
          let imageData: any = {};
          imageData.file = {
            data: {
              $binary: response.toString("base64"),
              $type: "00",
            },
            filename: formattedName,
            content_type: "image/webp",
            width: 800,
            height: 800,
          };
          return imageData;
        })
        .catch((error: any) => console.log("error", error))
    );
}

const formattedUrlArray = (formattedUrl: string[], record: any) => {
  const urlArray = formattedUrl.map((imageUrl: string, index: number) =>
    formatProductImage(imageUrl, record.fields["Title"], index)
  );
  return Promise.all(urlArray);
};

export default formattedUrlArray;
