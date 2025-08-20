import prisma from "../common/prismaClient";
import { allowedAvatarIds } from "../config/allowedAvatars";

export const setAvatar = async (req, res) => {
  const { avatarId } = req.body;
  const userId = req.user.id;

  if (!avatarId || !allowedAvatarIds.includes(avatarId)) {
    return res.status(400).json({ message: 'Invalid avatar selected' });
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { avatarId },
    });

    res.status(200).json({message: 'Avatar set successfully', user: updatedUser});
  } catch (error) {
    console.error('Error setting avatar:', error);
    res.status(500).json({ message: 'Failed to set avatar' });
  }
};

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
