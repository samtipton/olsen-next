/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/download/:slug*",
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
