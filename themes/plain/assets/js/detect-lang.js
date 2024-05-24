document.addEventListener('DOMContentLoaded', function () {
  var userLang = navigator.language || navigator.userLanguage;
  var langDomain = 'https://en.blog.xxx.com';

  if (userLang.startsWith('zh')) {
    langDomain = 'https://zh.blog.xxx.com';
  }

  if (window.location.hostname !== new URL(langDomain).hostname) {
    window.location.replace(langDomain + window.location.pathname);
  }
});
