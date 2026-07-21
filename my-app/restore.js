const fs = require('fs');

const restores = [
  {
    src: '/home/vijay-odedra/.config/Code/User/History/-151a91e5/6lnE.js',
    dest: '/home/vijay-odedra/Downloads/website/web/Veronic/my-app/src/components/Home.js'
  },
  {
    src: '/home/vijay-odedra/.config/Code/User/History/-10a6cdb9/9ihW.js',
    dest: '/home/vijay-odedra/Downloads/website/web/Veronic/my-app/src/components/About.js'
  },
  {
    src: '/home/vijay-odedra/.config/Code/User/History/-35383b44/Cu2R.js',
    dest: '/home/vijay-odedra/Downloads/website/web/Veronic/my-app/src/components/Services.js'
  },
  {
    src: '/home/vijay-odedra/.config/Code/User/History/-6271de12/EbDP.js',
    dest: '/home/vijay-odedra/Downloads/website/web/Veronic/my-app/src/components/BookDemo.js'
  },
  {
    src: '/home/vijay-odedra/.config/Code/User/History/339d3994/Bt65.js',
    dest: '/home/vijay-odedra/Downloads/website/web/Veronic/my-app/src/components/Contact.js'
  }
];

let success = true;

restores.forEach(({src, dest}) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Successfully restored: ${dest.split('/').pop()}`);
  } else {
    console.error(`❌ Missing backup for: ${dest.split('/').pop()}`);
    success = false;
  }
});

if (success) {
  console.log("\nAll major files from 1 hour ago have been perfectly restored!");
}
