CMS.registerEditorComponent(
  {
    id: "pdfReader",
    label: "Embed PDF",
    fields: [
      {
        name: "pdfFile",
        label: "PDF File",
        widget: "file"
      }
    ],
    pattern: /{{< pdfReader "([^"]+)" >}}/,
    fromBlock: function(match) {
      return {
        pdfFile: match[1],
      };
    },
    toBlock: function(obj) {
      return `{{< pdfReader "${obj.pdfFile}" >}}`;
    },
    toPreview: function(obj) {
      return `<embed src= "${obj.pdfFile}" width="100%" height="1000px" type="application/pdf">`;
    },
  });
CMS.registerEditorComponent(
  {
    id: "newtabref",
    label: "External link",
    fields: [{
      name: "title",
      label: "Link Title",
      widget: "string"
    },
      {
        name: "href",
        label: "Link URL",
        widget: "string"
      },
    ],
    pattern: /{{< newtabref href="([^"]+)" title="([^"]+)" >}}/,
    fromBlock: function(match) {
      return {
        href: match[1],
        title: match[2],
      };
    },
    toBlock: function(obj) {
      return `{{< newtabref href="${obj.href}" title="${obj.title}" >}}`;
    },
    toPreview: function(obj) {
      return `<a href="${obj.href}" rel="noopener" target="_blank">${obj.title}</a>`;
    },
  });
CMS.registerEditorComponent({
  id: "bookref",
  label: "Book Reference",
  fields: [
    {
      name: "isbn",
      label: "Book ISBN",
      widget: "string"
    },
    {
      name: "image",
      label: "Book Cover Image URL",
      widget: "image"
    },
    {
      name: "author",
      label: "Book Author",
      widget: "string"
    },
    {
      name: "title",
      label: "Book Title",
      widget: "string"
    }
  ],
  pattern: /{{< bookref isbn="([0-9]+)" image="([a-zA-Z0-9-._/]+)" author="([^"]+)" title="([^"]+)" >}}/,
  fromBlock: function(match) {
    return {
      isbn: match[1],
      image: match[2],
      author: match[3],
      title: match[4],
    };
  },
  toBlock: function(obj) {
    return `{{< bookref isbn="${obj.isbn}" image="${obj.image}" author="${obj.author}" title="${obj.title}" >}}`;
  },
  toPreview: function(obj) {
    return `<figure>
      <a href="https://www.powells.com/book/-${obj.isbn}/" rel="noopener" target="_blank"><img class="mx-auto d-block" src="${obj.image}" height="300px" alt="Book cover of ${obj.title} by ${obj.author}"></a>
      <figcaption>
        <h2><em><a href="https://www.powells.com/book/-${obj.isbn}/" rel="noopener" target="_blank">${obj.title}</a></em> by ${obj.author}</h2>
      </figcaption>
    </figure>`;
  },
});
