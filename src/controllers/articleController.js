import prisma from "../common/prismaClient.js";

export const getArticle = async (req, res) => {
  const articleId = req.article.id;
  try {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
      select: {
        id: true,
        articleUrl: true,
        headline: true,
        body: true,
        publishedAt: true,
        comments: true,
      },
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json(article);
  } catch (error) {
    console.error("Get article error:", error);
    res.status(500).json({ message: "Server error retrieving article data" });
  }
};
