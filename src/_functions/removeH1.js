module.exports = () => (text, render) => {
  const renderedText = render(text);
  return renderedText.replace(/<h1>.*(?:<a.*>.*<\/a>).*<\/h1>/g, '');
}
