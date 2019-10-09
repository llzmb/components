import { create } from '@storybook/theming';

// DB logo as base64 encoded SVG
const dbLogo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRo\nPSI1NCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDgwIDU3Ij48ZyBmaWxs\nLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik03MS45NiAw\nSDguMDRDMy42NCAwIDAgMy40OTUgMCA4LjAxdjQwLjEzN2MwIDQuNTE1IDMu\nNjQgOC4wOSA4LjA0IDguMDloNjMuOTJjNC40IDAgOC4wNC0zLjU4MyA4LjA0\nLTguMDlWOC4wMUM4MCAzLjQ5NSA3Ni4zNiAwIDcxLjk2IDB6IiBmaWxsPSIj\nRjAxNDE0Ii8+PHBhdGggZD0iTTc0LjE2IDQ4LjE0N2MwIDEuMjc4LS45MzYg\nMi4zMDYtMi4yIDIuMzA2SDguMDRjLTEuMjY0IDAtMi4yLTEuMDItMi4yLTIu\nMzA2VjguMDFjMC0xLjI3OC45MjgtMi4yOTggMi4yLTIuMjk4aDYzLjkyYzEu\nMjY0IDAgMi4yIDEuMDIgMi4yIDIuMjk4djQwLjEzN3oiIGZpbGw9IiNGRkYi\nLz48cGF0aCBkPSJNMjQuNDY0IDQ2LjUyNEgxMVY5LjcxM2gxMy40NjRjOS40\nOCAwIDE0LjcyIDUuOTYxIDE0LjcyIDE4LjIzNyAwIDEwLjY0NS0zLjU0NCAx\nOC40ODYtMTQuNzIgMTguNTc0em01Ljg0OC0xNy44MWMwLTcuNDE2LS43Njgt\nMTMuMjA5LTguNzItMTMuMjA5aC0xLjc3NnYyNS4wNWgzLjEyOGM0LjY1NiAw\nIDcuMzY4LTMuNzUyIDcuMzY4LTExLjg0MnptMzIuMTItMS40NDdjMi42LS42\nOSA2LjQwOC0zLjY2MyA2LjQwOC04LjU3MiAwLS43NzEtLjE2LTguOTc0LTEw\nLjQ2NC04Ljk3NEg0My4wMzJ2MzYuNzk1aDEyLjk2YzMuNDMyIDAgMTQuMTI4\nIDAgMTQuMTI4LTEwLjM0Ny4wMDgtMi41OC0xLjA0LTcuNDQ4LTcuNjg4LTgu\nOTAyek01MS43NiAxNS40MDFoMi43NzZjMy45NDQgMCA1LjUwNCAxLjM4MiA1\nLjUwNCA0LjQyNyAwIDIuNDE4LTEuNzI4IDQuNDUtNC43ODQgNC40NUg1MS43\nNnYtOC44Nzd6bTMuNjA4IDI1LjE1NEg1MS43NlYzMS4xaDMuODQ4YzQuNTc2\nIDAgNS42ODggMi42NzYgNS42ODggNC43MzIgMCA0LjcyNC00LjUzNiA0Ljcy\nNC01LjkyOCA0LjcyNHoiIGZpbGw9IiNGMDE0MTQiLz48L2c+PC9zdmc+';

const dbxTheme = create({
  base: 'light',
  colorPrimary: '#ffff00',
  colorSecondary: '#ec0016',
  appBg: '#fbfbfd',
  textColor: '#3c414b',
  textInverseColor: '#ffffff',
  appBorderRadius: 4,
  fontBase: '"DB Screen Sans", sans-serif',
  barTextColor: '#3c414b',
  barBg: '#fbfbfd',
  brandTitle: 'DBX',
  brandImage: dbLogo,
});

export default dbxTheme;
