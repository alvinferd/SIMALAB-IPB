module.exports = {
  images: {
    domains: ["localhost"],
  },
  async redirects() {
    return [
      {
        source: "/user",
        destination: "/user/pinjam-lab",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/admin/pinjam-lab",
        permanent: true,
      },
    ];
  },
};
