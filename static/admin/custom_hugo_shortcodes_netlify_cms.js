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
