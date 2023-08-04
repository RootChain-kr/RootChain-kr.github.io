import { githubIcon, linkedinIcon, blogIcon, linkIcon } from 'common/icons';

export const getIconByUrl = (url) => {
  const socialCategories = [
    { name: 'github', icon: githubIcon },
    { name: 'linkedin', icon: linkedinIcon },
    { name: 'blog', icon: blogIcon },
  ];

  let icon = linkIcon;
  socialCategories.map((category) => {
    if (url.search(category.name) > -1) icon = category.icon;
  });

  return icon;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
