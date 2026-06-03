const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  try {
    let files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach(function(file) {
      if (fs.statSync(dirPath + '/' + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
      } else {
        if (file.endsWith('.js') || file.endsWith('.jsx')) {
          arrayOfFiles.push(path.join(dirPath, '/', file))
        }
      }
    })
    return arrayOfFiles
  } catch(e) {
    return arrayOfFiles || [];
  }
}

const files = [...getAllFiles('app'), ...getAllFiles('components')];

const replacements = [
  // Header1
  { match: /import Header1 from ["']@\/components\/headers\/Header1["'];?/g, replace: 'import Header from "@/components/headers/Header";' },
  { match: /<Header1([ \/>])/g, replace: '<Header$1' },
  { match: /export default function Header1/g, replace: 'export default function Header' },

  // Nav1
  { match: /import Nav1 from ["']\.\/Nav1["'];?/g, replace: 'import Nav from "./Nav";' },
  { match: /<Nav1([ \/>])/g, replace: '<Nav$1' },
  { match: /export default function Nav1/g, replace: 'export default function Nav' },

  // Contact2 -> Contact
  { match: /import Contact from ["']@\/components\/common\/Contact2["'];?/g, replace: 'import Contact from "@/components/common/Contact";' },
  { match: /export default function Contact2/g, replace: 'export default function Contact' },

  // Portfolio2 -> Portfolio
  { match: /import Portfolio from ["']@\/components\/common\/Portfolio2["'];?/g, replace: 'import Portfolio from "@/components/common/Portfolio";' },
  { match: /export default function Portfolio2/g, replace: 'export default function Portfolio' },

  // Footer3 -> Footer
  { match: /import Footer3 from ["']@\/components\/footers\/Footer3["'];?/g, replace: 'import Footer from "@/components/footers/Footer";' },
  { match: /<Footer3([ \/>])/g, replace: '<Footer$1' },
  { match: /export default function Footer3/g, replace: 'export default function Footer' },

  // Footer1 -> FooterAlt
  { match: /import Footer1 from ["']@\/components\/footers\/Footer1["'];?/g, replace: 'import FooterAlt from "@/components/footers/FooterAlt";' },
  { match: /<Footer1([ \/>])/g, replace: '<FooterAlt$1' },
  { match: /export default function Footer1/g, replace: 'export default function FooterAlt' },

  // Education2 -> EducationAlt
  { match: /import Education from ["']@\/components\/common\/Education2["'];?/g, replace: 'import EducationAlt from "@/components/common/EducationAlt";' },
  { match: /<Education([ \/>])/g, replace: '<EducationAlt$1' }, // We'll conditionally skip app/about later
  { match: /export default function Education2/g, replace: 'export default function EducationAlt' },

  // Services3 -> ExtraServices
  { match: /import Services2 from ["']@\/components\/common\/Services3["'];?/g, replace: 'import ExtraServices from "@/components/common/ExtraServices";' },
  { match: /<Services2([ \/>])/g, replace: '<ExtraServices$1' },
  { match: /export default function Services3/g, replace: 'export default function ExtraServices' },

  // Skills2 -> ExtraSkills
  { match: /import Skills2 from ["']@\/components\/common\/Skills2["'];?/g, replace: 'import ExtraSkills from "@/components/common/ExtraSkills";' },
  { match: /<Skills2([ \/>])/g, replace: '<ExtraSkills$1' },
  { match: /export default function Skills2/g, replace: 'export default function ExtraSkills' },
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  replacements.forEach(r => {
    // If it's the Education component change, don't mess up app/about or components/common/Education
    if (r.replace.includes('<EducationAlt') && (file.includes('app\\\\about') || file.includes('app/about'))) {
      return; 
    }
    newContent = newContent.replace(r.match, r.replace);
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
