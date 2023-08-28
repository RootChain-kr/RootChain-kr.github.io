import { mdiGithub, mdiLinkedin, mdiAlphaBBox, mdiLinkVariant } from '@mdi/js';

export const getIconByUrl = (url) => {
  const socialCategories = [
    { name: 'github', icon: mdiGithub },
    { name: 'linkedin', icon: mdiLinkedin },
    { name: 'blog', icon: mdiAlphaBBox },
  ];

  let icon = mdiLinkVariant;
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
