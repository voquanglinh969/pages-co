import books from "../data/api-data/books.json";

const sleep = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const bookApi = {
  async getBooks(params = {}) {
    await sleep();

    let result = [...books];

    const { category, search, featured, mostLoved, hotOffThePress, limit } =
      params;

    if (category) {
      result = result.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (featured !== undefined) {
      result = result.filter((book) => book.featured === featured);
    }

    if (mostLoved !== undefined) {
      result = result.filter((book) => book.mostLoved === mostLoved);
    }

    if (hotOffThePress !== undefined) {
      result = result.filter((book) => book.hotOffThePress === hotOffThePress);
    }

    if (limit) {
      result = result.slice(0, limit);
    }

    return {
      success: true,
      message: "Books fetched successfully",
      data: result,
      meta: {
        total: result.length,
      },
    };
  },

  async getBookBySlug(slug) {
    await sleep();

    const book = books.find((item) => item.slug === slug);

    return {
      success: !!book,
      message: book ? "Book fetched successfully" : "Book not found",
      data: book || null,
    };
  },

  async getRelatedBooks(slug, limit = 4) {
    await sleep();

    const currentBook = books.find((item) => item.slug === slug);

    if (!currentBook) {
      return {
        success: false,
        message: "Book not found",
        data: [],
      };
    }

    const relatedBooks = books
      .filter(
        (item) => item.slug !== slug && item.category === currentBook.category
      )
      .slice(0, limit);

    return {
      success: true,
      message: "Related books fetched successfully",
      data: relatedBooks,
      meta: {
        total: relatedBooks.length,
      },
    };
  },
};
