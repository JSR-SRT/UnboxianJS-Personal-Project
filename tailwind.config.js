module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",   // ✅ ครอบคลุมไฟล์ JSX ของคุณ
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),  // ✅ แค่ require ตรงนี้
  ],
}
