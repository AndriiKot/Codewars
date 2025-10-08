function htmlspecialchars(formData) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
  };

  return formData.replace(/[&<>"]/g, (match) => htmlEntities[match]);
}

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
