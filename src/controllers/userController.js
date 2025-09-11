import prisma from '../common/prismaClient.js';


// GET USER
export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        username: true,
        email: true,
        avatar: true,
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

// UPDATE USER AVATAR
export const updateAvatar = async (req, res) => {
  const userId = req.user.id;
  const { avatar } = req.body;

  if(!avatar || !allowedAvatarIds.includes(avatar)) {
    return res.status(400).json({ message: "Invalid avatar selected" });
  }
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { avatar },
    });

  res.status(200).json({message: "Avatar updated successfully"});
  } catch (error) {
    console.error("Error in updating avatar", error);
    res.status(500).json({message: "Internal server error"});
  }
}

// DELETE AVATAR
export const removeAvatar = async (req, res) => {
  const userId = req.user.id;

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { avatarId: null },
    });

    res.status(200).json({ message: 'Avatar removed successfully' });
  } catch (error) {
    console.error('Error removing avatar:', error);
    res.status(500).json({ message: 'Server error removing avatar' });
  }
};


// DELETE ACCOUNT
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

