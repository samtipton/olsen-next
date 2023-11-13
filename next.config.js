/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:slug*.mp3",
        headers: [
          {
            key: "Content-disposition",
            value: "attachment",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
