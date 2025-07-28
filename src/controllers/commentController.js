const { prisma, jwt } = require('../..');
require('dotenv').config();
const WEB_TOKEN = process.env.WEB_TOKEN;

const getComments = async(req, res) => {
  const { articleUrl } = req.params;

  try {
    const comment = await prisma.comment.findMany({
        where: { articleUrl },
        include: {
            user: true,
        },
        orderBy: {
            dateCreated: 'desc',
        },
    });

    if(!comment || commentRoutes.length === 0) {
        return res.status(404).json({
            message: 'no comments found for this article'
        });
    }

    res.status(200).json(comments); 
  } catch (error) {
    console.error('error fetching comment');
    res.status(500).json({ message: 'server error fetching comment'})
  }
};

const createComment = async(req, res) => {
    const { articleUrl } = req.params;
    const { comment, userId } = req.body;
    
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ', '')) {
            return res.status(401).json({ message: 'authroization token required'});
        }

        const token = authHeader.replace('Bearer ', '');
        const decoded = jwt.verify(token, WEB_TOKEN);
        const authenticateUserId = decoded.id;
   

        if(authenticateUserId !== userId) {
            return res.status(403).json({ message: 'incorrect authentication, please try again'})
        }

        const article = await prisma.item.findUnique({
            where: { articleUrl },
        });

        if(!article) {
            return res.status(404).json({ message: 'article not found'})
        }

        const newComment = await prisma.comment.create({
            data: {
                userId,
                articleUrl,
                comment,
            },
        });

        res.status(201).json(newComment);
    } catch (error) {
        console.error('error creating comment', error);
        res.status(500).json({ message: 'server error creating comment'})
    }
};

const deleteComment = async(req, res) => {
    const { articleUrl } = req.params;
    const { comment, userId } = req.body;
    
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ', '')) {
            return res.status(401).json({ message: 'authroization token required'});
        }

        const token = authHeader.replace('Bearer ', '');
        const decoded = jwt.verify(token, WEB_TOKEN);
        const authenticateUserId = decoded.id;
   

        if(authenticateUserId !== userId) {
            return res.status(403).json({ message: 'incorrect authentication, please try again'})
        }

        const article = await prisma.item.findUnique({
            where: { articleUrl },
        });

        if(!article) {
            return res.status(404).json({ message: 'article not found'})
        }

        const removeComment = await prisma.comment.delete({
            data: {
                userId,
                articleUrl,
                comment,
            },
        });

        res.status(201).json(removeComment);
    } catch (error) {
        console.error('error removing comment', error);
        res.status(500).json({ message: 'server error removing comment'})
    }
};

module.exports = {
    getComments,
    createComment,
    deleteComment
}