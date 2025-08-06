import prisma from '../common/prismaClient.js';

export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isAdmin: true,
        dateCreated: true,
        dateUpdated: true
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('GetMe error:', error);
    res.status(500).json({ message: 'Server error retrieving user data' });
  }
};

export const getAllUsers = async (req, res) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'Admin access only' });
  }

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isAdmin: true,
        dateCreated: true,
        dateUpdated: true
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('getAllUsers error:', error);
    res.status(500).json({ message: 'Server error retrieving users' });
  }
};

export const deleteUserById = async (req, res) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'Admin access only' });
  }

  const userId = req.params.userid;

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    const { password, ...userWithoutPassword } = deletedUser;
    res.status(200).json({ message: 'User deleted successfully', user: userWithoutPassword });

  } catch (error) {
    console.error('deleteUserById error:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(500).json({ message: 'Server error deleting user' });
  }
};

export const deleteOwnAccount = async (req, res) => {
  const userId = req.user.id;

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    const { password, ...userWithoutPassword } = deletedUser;
    res.status(200).json({
      message: 'Your account has been successfully deleted.',
      user: userWithoutPassword,
    });

  } catch (error) {
    console.error('deleteOwnAccount error:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(500).json({ message: 'Server error deleting account' });
  }
};

