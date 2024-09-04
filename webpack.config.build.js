const webpack = require("webpack");

// Plugin to copy files from one place to another
const CopyWebpackPlugin = require("copy-webpack-plugin");

//Plugin to fetch CSS files from Javascript files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";