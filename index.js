const toolCategories = ['languages', 'package-managers', 'frontend', 'styling', 'backend', 'deploying', 'dev-tools'];

toolCategories.forEach(category => {
  document.getElementById(`tools-${category}-toggle`).onclick = async () => {
    const content = document.getElementById(`tools-${category}-content`);

    if (content.style.display === 'block') {
      content.style.display = 'none';
      return;
    }
    if (content.style.display === 'none') {
      content.style.display = 'block';
      return;
    }

    content.style.display = 'none';
  };
});
