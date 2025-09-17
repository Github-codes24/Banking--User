// Image constants for the entire app
// This file centralizes all image imports to make maintenance easier

export const Images = {
  // Payment related images
  deposite: require("@/assets/images/deposite.png"),
  loan: require("@/assets/images/loan.png"),
  saving: require("@/assets/images/saving.png"),
  banenr: require("@/assets/images/banner.png"),
  continue: require('@/assets/images/continue.png'),
  back: require('@/assets/images/back.png'),
  lock: require('@/assets/images/lock.png'),
  dropdown: require('@/assets/images/dropdown.png'),
  noti:require('@/assets/images/noti.png'),
  menu:require('@/assets/images/menu.png'),
  account:require('@/assets/images/account.png'),
  acp:require('@/assets/images/acp.png'),
  bag:require('@/assets/images/bag.png'),
  recurre:require('@/assets/images/recurre.png'),
  qr:require('@/assets/images/qr.png'),
  list:require('@/assets/images/list.png'),
  cal:require('@/assets/images/cal.png'),
  acc:require('@/assets/images/acc.png'),
  branch:require('@/assets/images/branch.png'),
  bank:require('@/assets/images/bnk.png'),
  transfer:require('@/assets/images/transfer.png'),
  mobile:require('@/assets/images/mobile.png'),
  setting:require('@/assets/images/settings.png'),
  eye: require('@/assets/images/eye.png'),
  bank1: require('@/assets/images/bank.png'),
  down: require('@/assets/images/down.png'),
  qrscreen: require('@/assets/images/qrscreen.png'),
  calender: require('@/assets/images/calender.png')
} as const;

// Type for image keys
export type ImageKey = keyof typeof Images;
