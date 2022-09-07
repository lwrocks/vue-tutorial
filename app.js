const app = Vue.createApp({
  data() {
    return {
      url: "https://www.twitter.com",
      showBooks: true,
      books: [
        { title: "Name of the Wind", author: "Patrick Rothfuss" },
        { title: "The Way of Kings", author: "Brandon Sanderson" },
        { title: "The Final Empire", author: "Brandon Sanderson" },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
