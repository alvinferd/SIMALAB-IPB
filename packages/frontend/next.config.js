module.exports = {
  images: {
    domains: [
      "localhost",
      "api-simalab.bintangfikriguska.my.id",
      "34.101.142.194",
    ],
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
