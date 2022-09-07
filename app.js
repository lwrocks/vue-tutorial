const app = Vue.createApp({
  data() {
    return {
      url: "https://www.twitter.com",
      showBooks: true,
      books: [
        {
          title: "Name of the Wind",
          author: "Patrick Rothfuss",
          img: "assets/1.jpeg",
          isFav: true,
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          img: "assets/2.jpeg",
          isFav: false,
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "assets/3.jpeg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
