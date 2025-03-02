# UIBits

UIBits is a curated collection of high-quality UI components and libraries from talented developers worldwide. This platform helps developers discover, share, and get inspired by amazing UI components.

## Contributing

We welcome contributions from the community! Here's how you can submit your UI component or library:

### 1. Prepare Your Component Data

Add your component information to `public/data/components.json`. Each component should follow this structure:

```json
{
  "id": "[next-available-id]",
  "componentName": "Your Component Name",
  "videoUrl": "/images/[component-folder]/preview.gif",
  "imageUrl": "/images/[component-folder]/preview.gif",
  "githubUrl": "https://github.com/username/repo",
  "livePreviewUrl": "https://demo-url.com",
  "stats": {
    "stars": 0,
    "forks": 0
  },
  "creator": {
    "username": "Creator's GitHub Username",
    "avatarUrl": "/images/[component-folder]/avatar.png",
    "isFeatured": false
  },
  "techStack": "react/vue/js/svelte"
}
```

### 2. Add Component Assets

Place your component assets in the correct directory structure under `public/images/`:

#### For Individual Components:

```
public/images/[component-name]/
├── preview.gif        # Main preview animation
└── logo.(png|jpg)    # Your or component's logo
```

#### For Library Components:

```
public/images/[library-name]/[component-name]/
├── preview.gif        # Main preview animation
└── logo.(png|jpg)    # Library or component logo
```

### Asset Requirements

- **Preview GIF**: A high-quality demonstration of your component in action
- **Logo**: Square format recommended, transparent background preferred
- **Folder Names**: Use lowercase, hyphen-separated names matching your GitHub repository

### 3. Submit Your PR

1. Fork the repository
2. Create a new branch: `git checkout -b add-your-component`
3. Add your component data and assets
4. Commit your changes: `git commit -m "Add: Your Component Name"`
5. Push to your fork: `git push origin add-your-component`
6. Create a Pull Request

## Development

To run the project locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## License

MIT License - feel free to use and contribute!
