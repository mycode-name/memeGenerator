# Meme Generator

A **modern web meme generator app** that fetches popular meme images from an [imgflip](https://imgflip.com/) API and lets you add your own captions—no need to upload images and adjust fonts.

## Features

- **Dynamic meme templates:** Meme images are fetched from an API, so you always get fresh, relevant templates.
- **Easy captioning:** Enter custom *top* and *bottom* text for your meme.
- **Instant preview:** View real-time updates of your meme as you type captions.
- **Simple workflow:** No file uploads, font adjustments, or download buttons—just type and meme.


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/)

### Local Setup

```bash
git clone https://github.com/mycode-name/memeGenerator.git
cd memeGenerator
npm install
npm run dev
```

Then, open `http://localhost:5173` in your browser to start creating memes.

## Usage

- Press “New Meme” to fetch a new template from the API.
- Enter your desired top and bottom captions.
- Watch the preview update in real time.

## Technology Stack

| Component         | Purpose                                |
|-------------------|----------------------------------------|
| IMGFLIP API       | Supplies meme template images          |
| JavaScript        | App logic and interactivity            |
| HTML & CSS        | Structure and styling                  |
| Vite              | Development server and build pipeline  |

## Project Structure

```
public/             # Static assets (e.g., icons), index.html
src/                # Main JavaScript source code
  ├── components/   # App components
  └── ...           # Logic and rendering
.gitignore
vite.config.js
package.json
README.md
```

## Limitations

- **No local upload:** Only meme images from the connected API are supported; you cannot upload your own images.
- **No font resizing:** Caption font size is fixed.
- **No download option:** Memes are preview-only and cannot be saved automatically from the app.


## Acknowledgements

Meme images are sourced via a third-party API. This project is for fun and educational purposes. If you’d like more features (such as uploads, downloads, or style options), your feedback and contributions are welcomed!