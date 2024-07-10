function insert_dev_tools(_, vars) {
  const newPages = [];
  vars.pages.forEach((page) => {
    if (page.blocks && !process.env.NEXT_PUBLIC_VERCEL_ENV) {
      page.blocks.unshift({
        _ref: { path: '../../../lowdefy-dev-tools/dev-tools/lowdefy_dev_tools.yaml' },
      });
    }
    newPages.push(page);
  });
  return newPages;
}

export default insert_dev_tools;
