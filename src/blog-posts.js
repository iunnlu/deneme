export const getPosts = () => {
  return [
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019",
      image: "https://images.wallpaperscraft.com/image/man_mountains_clouds_travel_118031_3840x2400.jpg"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019",
      image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019",
      image: "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"
    }
  ];
};
