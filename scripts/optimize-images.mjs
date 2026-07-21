import sharp from "sharp";

const images = [
  // Project images
  {
    input: "src/assets/Projectsimg/uni1.png",
    output: "src/assets/Projectsimg/uni1.webp",
    width: 600,
    quality: 78,
  },
  {
    input: "src/assets/Projectsimg/EM_img.png",
    output: "src/assets/Projectsimg/EM_img.webp",
    width: 600,
    quality: 78,
  },
  {
    input: "src/assets/Projectsimg/insightboard.png",
    output: "src/assets/Projectsimg/insightboard.webp",
    width: 600,
    quality: 78,
  },
  {
    input: "src/assets/Projectsimg/quizapp.png",
    output: "src/assets/Projectsimg/quizapp.webp",
    width: 600,
    quality: 78,
  },
  {
    input: "src/assets/Projectsimg/carsBlog.png",
    output: "src/assets/Projectsimg/carsBlog.webp",
    width: 600,
    quality: 78,
  },
  {
    input: "src/assets/Projectsimg/cardmatch.png",
    output: "src/assets/Projectsimg/cardmatch.webp",
    width: 600,
    quality: 78,
  },
  {
    input: "src/assets/Projectsimg/xo-AI.png",
    output: "src/assets/Projectsimg/xo-AI.webp",
    width: 600,
    quality: 78,
  },
  {
    input: "src/assets/Projectsimg/pharmacy.png",
    output: "src/assets/Projectsimg/pharmacy.webp",
    width: 600,
    quality: 78,
  },

  // Main images
  {
    input: "src/assets/logo.png",
    output: "src/assets/logo.webp",
    width: 128,
    quality: 82,
  },
  {
    input: "src/assets/ST3_4992 copy.jpg",
    output: "src/assets/ST3_4992 copy.webp",
    width: 480,
    quality: 80,
  },
  {
    input: "src/assets/EducationIcons/University_of_Bahrain_logo.png",
    output:
      "src/assets/EducationIcons/University_of_Bahrain_logo.webp",
    width: 300,
    quality: 82,
  },

  // Skill icons
  {
    input: "src/assets/skillsIcons/xampp.png",
    output: "src/assets/skillsIcons/xampp.webp",
    width: 64,
    quality: 82,
  },
  {
    input: "src/assets/skillsIcons/PHP.png",
    output: "src/assets/skillsIcons/PHP.webp",
    width: 64,
    quality: 82,
  },
  {
    input: "src/assets/skillsIcons/typescript.png",
    output: "src/assets/skillsIcons/typescript.webp",
    width: 64,
    quality: 82,
  },
  {
    input: "src/assets/skillsIcons/androidstudio.png",
    output: "src/assets/skillsIcons/androidstudio.webp",
    width: 64,
    quality: 82,
  },
  {
    input: "src/assets/skillsIcons/vscode.png",
    output: "src/assets/skillsIcons/vscode.webp",
    width: 64,
    quality: 82,
  },
  {
    input: "src/assets/skillsIcons/postman.png",
    output: "src/assets/skillsIcons/postman.webp",
    width: 64,
    quality: 82,
  },
  {
    input: "src/assets/skillsIcons/figma.png",
    output: "src/assets/skillsIcons/figma.webp",
    width: 64,
    quality: 82,
  },
  {
    input: "src/assets/icons/communication.png",
    output: "src/assets/icons/communication.webp",
    width: 64,
    quality: 82,
  },
];

for (const image of images) {
  await sharp(image.input)
    .rotate()
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
      effort: 6,
    })
    .toFile(image.output);

  console.log(`Created: ${image.output}`);
}

console.log("\nImage optimization completed.");
