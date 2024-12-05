{
  "version": 2,
  "builds": [
    {
      "src": "vue-static/package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "vue-static/$1"
    }
  ]
}
