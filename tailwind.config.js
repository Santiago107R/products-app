import { Colors } from './constants/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        light: {
          text: Colors.light.text,
          background: Colors.light.background,
          tint: Colors.light.tint,
          icon: Colors.light.icon,
          tabIconDefault: Colors.light.tabIconDefault,
          tabIconSelected: Colors.light.tabIconSelected,

          primary: Colors.light.primary
        },
        dark: {
          text: Colors.dark.text,
          background: Colors.dark.background,
          tint: Colors.dark.tint,
          icon: Colors.dark.icon,
          tabIconDefault: Colors.dark.tabIconDefault,
          tabIconSelected: Colors.dark.tabIconSelected,

          primary: Colors.dark.primary
        },
      },

      fontFamily: {
        'Kanit-Bold': ['Kanit-Bold', 'sans-serif'],
        'Kanit-Regular': ['Kanit-Regular', 'sans-serif'],
        'Kanit-Thin': ['Kanit-Thin', 'sans-serif'],
      },

    },
  },
  plugins: [],
}