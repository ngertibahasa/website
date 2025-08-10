import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Ngomong Inggris Nggak Cuma Bisa, Tapi Ngerti!",
  quickLinks: [
    {
      text: "FAQ",
      url: "/#faq",
    },
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Careers",
      url: "/careers",
    },
    {
      text: "Kebijakan Privasi & Syarat Layanan",
      url: "/privacy-policy",
    },
  ],
  email: "ngertibahasa.ec@gmail.com",
  telephone: "+628159777498",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com",
    // threads: 'https://www.threads.net',
    instagram: "https://www.instagram.com",
  },
};
