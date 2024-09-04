const webpack = require("webpack");
const path = require("path");

// Plugin to copy files from one place to another
const CopyWebpackPlugin = require("copy-webpack-plugin");

//Plugin to fetch CSS files from Javascript files
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const dirApp = path.join(__dirname, "app");
const dirAssets = path.join(__dirname, "assests");
const dirStyles = path.join(__dirname, "styles");

