enum FONT_FAMILY {
  GOOGLE_SANS = 'Product Sans',
  SANS_SERIF = 'sans-serif',
}
enum FONT_SIZES {
  SMALLER = "8px",
  SMALL = "14px",
  REGULAR = "18px",
  MEDIUM = "24px",
  BIG = "32px",
}
enum FONT_WEIGHTS {
  THIN = "100",
  REGULAR = "400",
  MEDIUM = "500",
  BOLD = "700",
}
enum COLORS {
  WHITE = "#FFFFFF",
  BLACK = "#000000",
  RED = "#d90429",
  GREY = "#808080",
  BEIGE = "rgba(0, 0, 0, 0.04)",
}
enum ICON_SIZES {
  SMALL = "12px",
  MEDIUM = "25px",
  BIG = "30px",
}
enum IMAGE_SIZES {
  SMALL = "12px",
  MEDIUM = "25px",
  BIG = "30px",
}

export const theme = {
  fontSizes: {
    SMALLER : FONT_SIZES.SMALL,
    SMALL : FONT_SIZES.SMALL,
    REGULAR : FONT_SIZES.REGULAR,
    MEDIUM : FONT_SIZES.MEDIUM,
    BIG : FONT_SIZES.BIG,
  },
  fontWeights: {
    THIN : FONT_WEIGHTS.THIN,
    MEDIUM : FONT_WEIGHTS.MEDIUM,
    BOLD : FONT_WEIGHTS.BOLD,
    REGULAR : FONT_WEIGHTS.REGULAR,
},
  colors: {
    WHITE: COLORS.WHITE,
    BLACK: COLORS.BLACK,
    RED: COLORS.RED,
    GREY: COLORS.GREY,
    BEIGE: COLORS.BEIGE,
  },

  iconsSizes: {
    sm: `
            height: ${ICON_SIZES.SMALL};
            width: ${ICON_SIZES.SMALL};
        `,
    md: `
            height: ${ICON_SIZES.MEDIUM};
            width: ${ICON_SIZES.MEDIUM};
        `,
    xl: `
            height: ${ICON_SIZES.BIG};
            width: ${ICON_SIZES.BIG};
        `,
  },
  imagesSizes: {
    sm: `
            height: ${IMAGE_SIZES.SMALL};
            width: ${IMAGE_SIZES.SMALL};
        `,
    md: `
            height: ${IMAGE_SIZES.MEDIUM};
            width: ${IMAGE_SIZES.MEDIUM};
        `,
    xl: `
            height: ${IMAGE_SIZES.BIG};
            width: ${IMAGE_SIZES.BIG};
        `,
  },
};
